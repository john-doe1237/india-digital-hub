import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";
import Common "../types/common";
import DocTypes "../types/documents";

module {
  public type DocStore = Map.Map<Common.UserId, List.List<DocTypes.Document>>;

  /// Get all documents for a user
  public func getAll(store : DocStore, userId : Common.UserId) : [DocTypes.Document] {
    switch (store.get(userId)) {
      case (?list) { list.toArray() };
      case null { [] };
    };
  };

  /// Add a new document for a user; returns the new docId
  public func add(store : DocStore, userId : Common.UserId, payload : DocTypes.AddDocumentPayload, nextId : Nat, now : Common.Timestamp) : Nat {
    let doc : DocTypes.Document = {
      docId = nextId;
      title = payload.title;
      category = payload.category;
      fileType = payload.fileType;
      uploadDate = now;
      description = payload.description;
    };
    switch (store.get(userId)) {
      case (?list) { list.add(doc) };
      case null {
        let list = List.empty<DocTypes.Document>();
        list.add(doc);
        store.add(userId, list);
      };
    };
    nextId;
  };

  /// Delete a document by docId; returns true if found and removed
  public func delete(store : DocStore, userId : Common.UserId, docId : Nat) : Bool {
    switch (store.get(userId)) {
      case (?list) {
        let sizeBefore = list.size();
        let filtered = list.filter(func(d : DocTypes.Document) : Bool { d.docId != docId });
        let sizeAfter = filtered.size();
        if (sizeAfter < sizeBefore) {
          // Replace the list contents by clearing and re-adding
          list.clear();
          list.append(filtered);
          true;
        } else {
          false;
        };
      };
      case null { false };
    };
  };

  /// Initialize demo documents for a new user; returns nextId after insertions
  public func initDemo(store : DocStore, userId : Common.UserId, nextId : Nat, now : Common.Timestamp) : Nat {
    let list = List.empty<DocTypes.Document>();
    list.add({
      docId = nextId;
      title = "Aadhaar Card Copy";
      category = "Identity";
      fileType = #PDF;
      uploadDate = now;
      description = "Official Aadhaar card issued by UIDAI";
    });
    list.add({
      docId = nextId + 1;
      title = "Voter ID Copy";
      category = "Identity";
      fileType = #Image;
      uploadDate = now;
      description = "Voter identification card issued by Election Commission";
    });
    list.add({
      docId = nextId + 2;
      title = "Income Tax Return";
      category = "Finance";
      fileType = #PDF;
      uploadDate = now;
      description = "Latest filed income tax return (ITR)";
    });
    store.add(userId, list);
    nextId + 3;
  };
};
