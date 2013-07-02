HipsterBike.prototype = new Bike();
HipsterBike.prototype.constructor = Bike;

function HipsterBike(){
    Bike.call(this);

    this.goBiking = function(){
        console.log("BIKING ON A ROOOOOAD WITH A" + this.color +  "HIPSTER BIKE (it has a moustache)");
    }
}
