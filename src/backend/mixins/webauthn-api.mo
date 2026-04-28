import WebAuthnLib "../lib/webauthn";
import WebAuthnTypes "../types/webauthn";

mixin (webauthnStore : WebAuthnLib.WebAuthnStore) {

  // Register a new WebAuthn credential (fingerprint / biometric) for the caller
  public shared ({ caller }) func registerWebAuthnCredential(
    credentialId : Blob,
    publicKey : Blob,
    deviceName : Text,
  ) : async { #ok : Text; #err : Text } {
    WebAuthnLib.register(webauthnStore, caller, credentialId, publicKey, deviceName);
  };

  // Get caller's registered credentials (publicKey excluded for security)
  public shared query ({ caller }) func getWebAuthnCredentials() : async [WebAuthnTypes.WebAuthnCredentialPublic] {
    WebAuthnLib.getPublic(webauthnStore, caller);
  };

  // Remove a specific credential belonging to caller
  public shared ({ caller }) func removeWebAuthnCredential(
    credentialId : Blob,
  ) : async { #ok : Text; #err : Text } {
    WebAuthnLib.remove(webauthnStore, caller, credentialId);
  };

  // Check whether a credentialId belongs to caller (frontend handles crypto verification)
  public shared ({ caller }) func verifyWebAuthnCredential(
    credentialId : Blob,
  ) : async { #ok : Bool; #err : Text } {
    WebAuthnLib.verify(webauthnStore, caller, credentialId);
  };
};
