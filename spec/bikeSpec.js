describe("Client", function(){
    var greenBikeFactory, redBikeFactory, bike;
    beforeEach(function(){
       greenBikeFactory = new GreenBikeFactory();
       redBikeFactory = new RedBikeFactory();
    });

    it("should build a red or green hipster bike", function(){
        var bike = greenBikeFactory.createHipsterBike();

        expect(bike.color).toBe("green");

        bike = redBikeFactory.createHipsterBike();

        expect(bike.color).toBe("red");
    });

    it("should build a red or green tandem bike", function(){
        var bike = greenBikeFactory.createTandemBike();

        expect(bike.color).toBe("green");

        bike = redBikeFactory.createTandemBike();

        expect(bike.color).toBe("red");
        expect(bike.seats).toBe(2);
    });

    it("should build a red or green road bike", function(){
        var bike = greenBikeFactory.createRoadBike();

        expect(bike.color).toBe("green");

        bike = redBikeFactory.createRoadBike();

        expect(bike.color).toBe("red");
    });
});