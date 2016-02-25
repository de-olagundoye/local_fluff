describe("An AngularJS test suite", function (){
  beforeEach(module());

  it('should have tests', function(){
    expect(true).toBe(true);
  });

  it('should inject dependencies', inject(function ($resource) {
    expect($resource).toBeDefined();
  }))
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

