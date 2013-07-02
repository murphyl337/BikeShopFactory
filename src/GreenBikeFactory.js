/**
 * Created with JetBrains WebStorm.
 * User: tmurphy
 * Date: 7/2/13
 * Time: 8:36 AM
 * To change this template use File | Settings | File Templates.
 */
GreenBikeFactory.prototype = new AbstractFactory();
GreenBikeFactory.prototype.constructor = AbstractFactory;

function GreenBikeFactory(){
    AbstractFactory.call(this);
    this.bike = new Bike();

    this.createRoadBike = function(){
        this.bike.frame = "light-weight";
        this.bike.wheels = 2;
        this.bike.seats = 1;
        this.bike.color = "green";

        return this.bike;
    };

    this.createTandemBike = function(){
        this.bike.frame = "extra long";
        this.bike.wheels = 2;
        this.bike.seats = 2;
        this.bike.color = "green";

        return this.bike;
    };

    this.createHipsterBike = function(){
        this.bike.frame = "cool frame";
        this.bike.wheels = 2;
        this.bike.seats = 1;
        this.bike.color = "green";

        return this.bike;
    };
}