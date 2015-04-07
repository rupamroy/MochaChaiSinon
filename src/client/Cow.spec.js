var expect = chai.expect;

 
describe("Cow", function() {
  describe("constructor", function() {
    it("should have a default name", function() {
      var cow=new Cow();
      expect(cow.name).to.equal("Gauri");
    });
 
    it("should set cow's name if provided", function() {
      var cow = new Cow("Kate");
      expect(cow.name).to.equal("Kate");
    });
  });
 
  describe("#greets", function() {
    it("should throw if no target is passed in", function() {
      expect(function() {
        (new Cow()).greets();
      }).to.throw(Error);
    });
 
    it("should greet passed target", function() {
      var greetings = (new Cow("Kate")).greets("Baby");
      expect(greetings).to.equal("Kate greets Baby");
    });
  });

  describe("#lateGreets", function(){
    it("should throw error if no target is passed",function(done){
      (new Cow("Kate")).lateGreets(null, function(err){
        expect(err).to.be.an.instanceof(Error);
        done();
      });
    });

    it("should greet if target is passed", function(done){
      (new Cow("Kate")).lateGreets("Rupam",function(err, greetings){
        expect(greetings).to.equal("Kate greets Rupam");
        done();
      });

    });

  });

  describe("#greet Console", function(){
    var sandbox;
    beforeEach(function(){
      sandbox=sinon.sandbox.create();
      sandbox.stub(console, "log");
      sandbox.stub(console, "error");
    });

    it("should log an error if no target is passed in", function() {
      expect(function() {
        (new Cow()).greets();
      }).to.throw(Error);
      sinon.assert.notCalled(console.log);
      sinon.assert.calledOnce(console.error);
      sinon.assert.calledWithExactly(console.error, "missing target")
    });

    it("should log greetings", function() {
      var greetings = (new Cow("Kate")).greets("Baby");
 
      sinon.assert.notCalled(console.error);
      sinon.assert.calledOnce(console.log);
      sinon.assert.calledWithExactly(console.log, "Kate greets Baby")
    });

    afterEach(function(){
      sandbox.restore();
    });
  })

});