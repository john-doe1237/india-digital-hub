import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";
import Common "../types/common";
import ServiceTypes "../types/services";

module {
  // Per-user services stored as a List keyed by Principal
  public type ServicesStore = Map.Map<Common.UserId, List.List<ServiceTypes.GovService>>;

  /// Convert internal service to public type
  public func toPublic(svc : ServiceTypes.GovService) : ServiceTypes.GovServicePublic {
    {
      serviceId = svc.serviceId;
      name = svc.name;
      category = svc.category;
      status = svc.status;
      lastUpdated = svc.lastUpdated;
      metadata = svc.metadata;
    };
  };

  /// Get all services for a user as public projection
  public func getAll(store : ServicesStore, userId : Common.UserId) : [ServiceTypes.GovServicePublic] {
    switch (store.get(userId)) {
      case (?list) {
        list.map<ServiceTypes.GovService, ServiceTypes.GovServicePublic>(toPublic).toArray();
      };
      case null { [] };
    };
  };

  /// Initialize demo services for a new user
  public func initDemo(store : ServicesStore, userId : Common.UserId, now : Common.Timestamp) {
    let list = List.empty<ServiceTypes.GovService>();
    let svc1 : ServiceTypes.GovService = {
      serviceId = "aadhaar";
      name = "Aadhaar Card";
      category = #Identity : Common.ServiceCategory;
      var status : Common.ServiceStatus = #Verified;
      var lastUpdated = now;
      var metadata = "";
    };
    list.add(svc1);
    let svc2 : ServiceTypes.GovService = {
      serviceId = "voter-id";
      name = "Voter ID";
      category = #Identity : Common.ServiceCategory;
      var status : Common.ServiceStatus = #Verified;
      var lastUpdated = now;
      var metadata = "";
    };
    list.add(svc2);
    let svc3 : ServiceTypes.GovService = {
      serviceId = "ration-card";
      name = "Ration Card";
      category = #FoodSecurity : Common.ServiceCategory;
      var status : Common.ServiceStatus = #Pending;
      var lastUpdated = now;
      var metadata = "";
    };
    list.add(svc3);
    let svc4 : ServiceTypes.GovService = {
      serviceId = "electricity";
      name = "Electricity Connection";
      category = #Utilities : Common.ServiceCategory;
      var status : Common.ServiceStatus = #Verified;
      var lastUpdated = now;
      var metadata = "";
    };
    list.add(svc4);
    let svc5 : ServiceTypes.GovService = {
      serviceId = "pan-card";
      name = "PAN Card";
      category = #Finance : Common.ServiceCategory;
      var status : Common.ServiceStatus = #NotLinked;
      var lastUpdated = now;
      var metadata = "";
    };
    list.add(svc5);
    store.add(userId, list);
  };

  /// Update the status of a specific service for a user
  public func updateStatus(store : ServicesStore, userId : Common.UserId, payload : ServiceTypes.UpdateServicePayload, now : Common.Timestamp) : Bool {
    switch (store.get(userId)) {
      case (?list) {
        var found = false;
        list.mapInPlace(func(svc : ServiceTypes.GovService) : ServiceTypes.GovService {
          if (svc.serviceId == payload.serviceId) {
            svc.status := payload.status;
            svc.metadata := payload.metadata;
            svc.lastUpdated := now;
            found := true;
          };
          svc;
        });
        found;
      };
      case null { false };
    };
  };
};
