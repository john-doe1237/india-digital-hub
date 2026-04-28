import Time "mo:core/Time";
import ProfileTypes "../types/profile";
import ProfileLib "../lib/profile";

mixin (
  profiles : ProfileLib.ProfileStore
) {
  /// Returns the caller's profile, or null if not yet initialised
  public shared query ({ caller }) func getUserProfile() : async ?ProfileTypes.UserProfilePublic {
    ProfileLib.get(profiles, caller);
  };

  /// Update name, email, phone for the caller
  public shared ({ caller }) func updateProfile(payload : ProfileTypes.UpdateProfilePayload) : async () {
    let now = Time.now();
    if (not ProfileLib.exists(profiles, caller)) {
      ProfileLib.create(profiles, caller, now);
    };
    ProfileLib.update(profiles, caller, payload, now);
  };
};
