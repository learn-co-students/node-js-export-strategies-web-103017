const Decor = require('./lamp');
const powerEvents = require('./power');
const powerLimits = require('./power_limits');

const myLamp = new Decor(10);
// console.log(myLamp)
console.log(myLamp.currentBrightness);

myLamp.turnOn();

console.log(`myLamp's current Brightness: ${myLamp.currentBrightness}`);

powerEvents.surge(myLamp);
powerEvents.outage(myLamp);

myLamp.turnOn();

console.log(`myLamp's current brightness: ${myLamp.currentBrightness}`)

console.log(powerLimits.type);
console.log(powerLimits.maxBrightness);
