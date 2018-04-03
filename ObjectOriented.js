// Culmination - Pseudoclassical Subclassing

// 2 parts to each class (Super of other)
// First: constructor function (called to create an isntance of a classs)
    // i.e. var subaru = Car(here);
// Second: prototype object
    // this is just a container for all methods for that class

//Car super-class constructor function
var Car = function(loc) {
    this.loc = loc;
};

// Car super-class prototype object
Car.prototype.move = function() {
    // 'var obj' could be substituded/created instead of using 'this', if you were to write this out
    // this = Object.create(Car);  ** These lines are implied if use 'new' upon instantiation
    this.loc++;
    // return this;  **
};

//Van constructor function
var Van = function(loc) {
    Car.call(this, loc); // creaes a new object with the qualities of the Car construction function (loc) for this (Van)
};

Van.prototype = Object.create(Car); // links failed queries on Van to the Car object


Van.constructor = Van; //resets the constructor property (created by default) to the correct constructor function Van
Van.prototype.grab = function () { /*...*/ }; // new method specific to vans
