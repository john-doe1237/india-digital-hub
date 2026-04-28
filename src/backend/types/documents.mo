import Common "common";

module {
  public type Document = {
    docId : Nat;
    title : Text;
    category : Text;
    fileType : Common.FileType;
    uploadDate : Common.Timestamp;
    description : Text;
  };

  public type AddDocumentPayload = {
    title : Text;
    category : Text;
    fileType : Common.FileType;
    description : Text;
  };
};
