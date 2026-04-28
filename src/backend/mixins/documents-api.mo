import Time "mo:core/Time";
import DocTypes "../types/documents";
import DocLib "../lib/documents";

mixin (
  documents : DocLib.DocStore
) {
  var nextDocId : Nat = 1000;

  /// Returns all documents belonging to the caller
  public shared query ({ caller }) func getUserDocuments() : async [DocTypes.Document] {
    DocLib.getAll(documents, caller);
  };

  /// Add a new document for the caller; returns the assigned docId
  public shared ({ caller }) func addDocument(payload : DocTypes.AddDocumentPayload) : async Nat {
    let now = Time.now();
    let id = nextDocId;
    nextDocId += 1;
    ignore DocLib.add(documents, caller, payload, id, now);
    id;
  };

  /// Delete a document by docId; returns true if found and removed
  public shared ({ caller }) func deleteDocument(docId : Nat) : async Bool {
    DocLib.delete(documents, caller, docId);
  };
};
