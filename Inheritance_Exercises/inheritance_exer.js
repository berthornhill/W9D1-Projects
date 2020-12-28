

// function Surrogate() {}
// Surrogate.prototype = MovingObject.prototype;
// this.prototype = new Surrogate();
// this.prototype.constructor = this;


Function.prototype.inherits = function(superClass) {
    function Surrogate() {}
    Surrogate.prototype = superClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}


function MovingObject () {

    function eats(name) {
        console.log(`${name} does not need to eat.`)
    }
}


function Ship () {

    function fly(name) {
        console.log(`${name} flies around.`);
    }
}
Ship.inherits(MovingObject);


function Asteroid () {

    function drift(name) {
        console.log(`${name} floats through space`)
    }
}
Asteroid.inherits(MovingObject);