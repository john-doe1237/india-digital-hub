import Map "mo:core/Map";
import Time "mo:core/Time";
import Principal "mo:core/Principal";
import Common "../types/common";
import ProfileTypes "../types/profile";

module {
  public type ProfileStore = Map.Map<Common.UserId, ProfileTypes.UserProfile>;

  /// Check if a user profile exists
  public func exists(store : ProfileStore, userId : Common.UserId) : Bool {
    store.containsKey(userId);
  };

  /// Get the public projection of a profile
  public func toPublic(profile : ProfileTypes.UserProfile) : ProfileTypes.UserProfilePublic {
    {
      userId = profile.userId;
      name = profile.name;
      email = profile.email;
      phone = profile.phone;
      createdAt = profile.createdAt;
      updatedAt = profile.updatedAt;
    };
  };

  /// Get user profile, returning null if not found
  public func get(store : ProfileStore, userId : Common.UserId) : ?ProfileTypes.UserProfilePublic {
    switch (store.get(userId)) {
      case (?profile) { ?toPublic(profile) };
      case null { null };
    };
  };

  /// Create a new profile with default values
  public func create(store : ProfileStore, userId : Common.UserId, now : Common.Timestamp) {
    let profile : ProfileTypes.UserProfile = {
      userId;
      var name = "";
      var email = "";
      var phone = "";
      createdAt = now;
      var updatedAt = now;
    };
    store.add(userId, profile);
  };

  /// Update an existing profile's mutable fields
  public func update(store : ProfileStore, userId : Common.UserId, payload : ProfileTypes.UpdateProfilePayload, now : Common.Timestamp) {
    switch (store.get(userId)) {
      case (?profile) {
        profile.name := payload.name;
        profile.email := payload.email;
        profile.phone := payload.phone;
        profile.updatedAt := now;
      };
      case null {};
    };
  };
};
