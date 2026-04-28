import Common "common";

module {
  public type UserProfile = {
    userId : Common.UserId;
    var name : Text;
    var email : Text;
    var phone : Text;
    createdAt : Common.Timestamp;
    var updatedAt : Common.Timestamp;
  };

  // Shared (immutable) version for API boundary
  public type UserProfilePublic = {
    userId : Common.UserId;
    name : Text;
    email : Text;
    phone : Text;
    createdAt : Common.Timestamp;
    updatedAt : Common.Timestamp;
  };

  public type UpdateProfilePayload = {
    name : Text;
    email : Text;
    phone : Text;
  };
};
