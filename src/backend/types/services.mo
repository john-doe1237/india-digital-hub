import Common "common";

module {
  public type GovService = {
    serviceId : Text;
    name : Text;
    category : Common.ServiceCategory;
    var status : Common.ServiceStatus;
    var lastUpdated : Common.Timestamp;
    var metadata : Text; // JSON-serializable metadata string
  };

  // Shared (immutable) version for API boundary
  public type GovServicePublic = {
    serviceId : Text;
    name : Text;
    category : Common.ServiceCategory;
    status : Common.ServiceStatus;
    lastUpdated : Common.Timestamp;
    metadata : Text;
  };

  public type UpdateServicePayload = {
    serviceId : Text;
    status : Common.ServiceStatus;
    metadata : Text;
  };
};
