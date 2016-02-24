describe("An AngularJS test suite", function (){
  it('should have tests', function(){
    expect(true).toBe(true);
  });
});

describe("+", function(){
  it("adds two numbers together", function(){
    expect(2 + 2).toEqual(4);
  });
});

describe("-", function(){
  it("subtracts one number from another", function(){
    expect(5 - 3).toEqual(2);
  });
});

