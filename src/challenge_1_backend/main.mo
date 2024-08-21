actor {
  public query func sum(a : Int, b : Int) : async Int {
    return a + b;
  };

  public query func multiply(a : Int, b : Int) : async Int {
    return a * b;
  };

  public query func divide(a : Int, b : Int) : async Int {
    return a / b;
  };

  public query func subtract(a : Int, b : Int) : async Int {
    return a - b;
  };
};
