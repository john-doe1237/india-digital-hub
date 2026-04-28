import Time "mo:core/Time";

module {
  public type UserId = Principal;
  public type Timestamp = Int; // nanoseconds since epoch (Time.now())

  public type ServiceCategory = {
    #Identity;
    #FoodSecurity;
    #Utilities;
    #Finance;
    #Travel;
  };

  public type ServiceStatus = {
    #Verified;
    #Pending;
    #NotLinked;
  };

  public type FileType = {
    #PDF;
    #Image;
  };
};
