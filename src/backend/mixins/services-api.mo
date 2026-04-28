import Time "mo:core/Time";
import ServiceTypes "../types/services";
import ServicesLib "../lib/services";

mixin (
  services : ServicesLib.ServicesStore
) {
  /// Returns all government services linked to the caller
  public shared query ({ caller }) func getUserServices() : async [ServiceTypes.GovServicePublic] {
    ServicesLib.getAll(services, caller);
  };

  /// Update the status and metadata of a specific service for the caller
  public shared ({ caller }) func updateServiceStatus(payload : ServiceTypes.UpdateServicePayload) : async Bool {
    let now = Time.now();
    ServicesLib.updateStatus(services, caller, payload, now);
  };
};
