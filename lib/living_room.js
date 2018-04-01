const Lamp = require("./lamp");
const myLamp = new Lamp(10);

// prints 0
console.log(myLamp.currentBrightness);

myLamp.turnOn();

// prints 10
console.log(myLamp.currentBrightness);
