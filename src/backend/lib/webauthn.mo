import Map "mo:core/Map";
import List "mo:core/List";
import Time "mo:core/Time";
import Principal "mo:core/Principal";
import Array "mo:core/Array";
import Blob "mo:core/Blob";
import Types "../types/webauthn";

module {
  public type WebAuthnStore = Map.Map<Types.UserId, List.List<Types.WebAuthnCredential>>;

  let MAX_CREDENTIALS : Nat = 5;

  // Register a new credential for caller. Returns #ok or #err.
  public func register(
    store : WebAuthnStore,
    caller : Types.UserId,
    credentialId : Blob,
    publicKey : Blob,
    deviceName : Text,
  ) : { #ok : Text; #err : Text } {
    if (caller.isAnonymous()) {
      return #err("Anonymous users cannot register credentials");
    };

    let existing = switch (store.get(caller)) {
      case (?list) list;
      case null {
        let newList = List.empty<Types.WebAuthnCredential>();
        store.add(caller, newList);
        newList;
      };
    };

    // Enforce max credentials
    if (existing.size() >= MAX_CREDENTIALS) {
      return #err("Maximum of 5 credentials allowed per user");
    };

    // Check for duplicate credentialId
    let duplicate = existing.find(func(c : Types.WebAuthnCredential) : Bool {
      c.credentialId == credentialId
    });
    if (duplicate != null) {
      return #err("Credential already registered");
    };

    let credential : Types.WebAuthnCredential = {
      credentialId;
      publicKey;
      createdAt = Time.now();
      deviceName;
    };
    existing.add(credential);
    #ok("Credential registered successfully");
  };

  // Get public-facing credentials for caller (no publicKey exposed)
  public func getPublic(
    store : WebAuthnStore,
    caller : Types.UserId,
  ) : [Types.WebAuthnCredentialPublic] {
    switch (store.get(caller)) {
      case null [];
      case (?list) {
        list.map<Types.WebAuthnCredential, Types.WebAuthnCredentialPublic>(func(c) {
          { credentialId = c.credentialId; deviceName = c.deviceName; createdAt = c.createdAt }
        }).toArray()
      };
    };
  };

  // Remove a specific credential for caller
  public func remove(
    store : WebAuthnStore,
    caller : Types.UserId,
    credentialId : Blob,
  ) : { #ok : Text; #err : Text } {
    switch (store.get(caller)) {
      case null #err("No credentials found");
      case (?list) {
        let sizeBefore = list.size();
        let filtered = list.filter(func(c : Types.WebAuthnCredential) : Bool {
          c.credentialId != credentialId
        });
        if (filtered.size() == sizeBefore) {
          return #err("Credential not found");
        };
        // Replace the list in the store with the filtered list
        store.add(caller, filtered);
        #ok("Credential removed successfully");
      };
    };
  };

  // Verify that a credentialId belongs to caller
  public func verify(
    store : WebAuthnStore,
    caller : Types.UserId,
    credentialId : Blob,
  ) : { #ok : Bool; #err : Text } {
    switch (store.get(caller)) {
      case null #ok(false);
      case (?list) {
        let found = list.find(func(c : Types.WebAuthnCredential) : Bool {
          c.credentialId == credentialId
        });
        #ok(found != null);
      };
    };
  };
};
