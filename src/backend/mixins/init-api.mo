import Time "mo:core/Time";
import ProfileLib "../lib/profile";
import ServicesLib "../lib/services";
import DocLib "../lib/documents";
import DocTypes "../types/documents";

mixin (
  profiles : ProfileLib.ProfileStore,
  services : ServicesLib.ServicesStore,
  documents : DocLib.DocStore
) {
  /// Called on first login to pre-populate demo profile, 5 verified services, and 3 demo documents.
  /// Idempotent — does nothing if the user already has data.
  public shared ({ caller }) func initUserData() : async () {
    // Guard: skip if already initialized
    if (ProfileLib.exists(profiles, caller)) {
      return;
    };
    let now = Time.now();
    ProfileLib.create(profiles, caller, now);
    ServicesLib.initDemo(services, caller, now);
    // Insert 3 demo documents with fixed IDs in a private range (0-2)
    let _ = DocLib.initDemo(documents, caller, 0, now);
  };
};
