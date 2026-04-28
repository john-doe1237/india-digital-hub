import Types "../types/common";

module {
  public type UserId = Types.UserId;
  public type Timestamp = Types.Timestamp;

  // Internal type — stores the full credential including public key
  public type WebAuthnCredential = {
    credentialId : Blob;
    publicKey : Blob;
    createdAt : Timestamp;
    deviceName : Text;
  };

  // Public type — omits publicKey for security
  public type WebAuthnCredentialPublic = {
    credentialId : Blob;
    deviceName : Text;
    createdAt : Timestamp;
  };
};
