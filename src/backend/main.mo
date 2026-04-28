import Map "mo:core/Map";
import ProfileLib "lib/profile";
import ServicesLib "lib/services";
import DocLib "lib/documents";
import WebAuthnLib "lib/webauthn";
import ProfileMixin "mixins/profile-api";
import ServicesMixin "mixins/services-api";
import DocsMixin "mixins/documents-api";
import InitMixin "mixins/init-api";
import WebAuthnMixin "mixins/webauthn-api";

actor {
  // --- Stable state ---
  let profiles : ProfileLib.ProfileStore = Map.empty();
  let services : ServicesLib.ServicesStore = Map.empty();
  let documents : DocLib.DocStore = Map.empty();
  let webauthnCredentials : WebAuthnLib.WebAuthnStore = Map.empty();

  // --- Mixin composition ---
  include ProfileMixin(profiles);
  include ServicesMixin(services);
  include DocsMixin(documents);
  include InitMixin(profiles, services, documents);
  include WebAuthnMixin(webauthnCredentials);
};
