/**
 * Created with JetBrains WebStorm.
 * User: tmurphy
 * Date: 7/2/13
 * Time: 8:43 AM
 * To change this template use File | Settings | File Templates.
 */
TandemBike.prototype = new Bike();
TandemBike.prototype.constructor = Bike;

function TandemBike(){
    Bike.call(this);

    this.goBiking = function(){
        console.log("BIKING ON A ROOOOOAD WITH A" + this.color +  "TANDEM BIKE");
    }
}
