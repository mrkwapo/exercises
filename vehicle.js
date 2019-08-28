class Vehicle {
  constructor(engine, color, seats, doors, wheels) {
    this.engine = engine;
    this.color = color;
    this.seats = seats;
    this.alarm = false;
    this.doors = doors;
    this.wheels = wheels;
  }

  changeColor(newColor) {
    this.color = newColor;
  }

  changeWheels(newWheels) {
    this.wheels = newWheels;
  }

  addAlarm() {
    this.alarm = true;
  }
}

// const Benz = new Vehicle('v6', 'blue', 4, 4, 'chrome 20 inch');

// Benz.addAlarm(true);

// console.log('Engine Type:', Benz.engine);
// console.log('Color:', Benz.color);
// console.log('Number of Seats:', Benz.seats);
// console.log('Wheels:', Benz.wheels);
// console.log('Alarm:', Benz.alarm);

class Sedan extends Vehicle {
  constructor(engine, color, seats, doors, wheels, make) {
    super(engine, color, seats, doors, wheels);
    this.convertible = false;
    this.make = make;
  }

  makeConvertible() {
    this.convertible = true;
  }
}

const mySedan = new Sedan('v8', 'Black', 5, 4, 'chrome factory', 'Mercedes');

mySedan.makeConvertible(true);
mySedan.addAlarm(true);
console.log('Engine:', mySedan.engine);
console.log('Color:', mySedan.color);
console.log('Number of Seats:', mySedan.seats);
console.log('Number of Doors:', mySedan.doors);
console.log('Wheels:', mySedan.wheels);
console.log('Make:', mySedan.make);
console.log('Alarm:', mySedan.alarm);
console.log('Convertible:', mySedan.convertible);

class Hatchback extends Vehicle {
  constructor(engine, color, seats, doors, wheels, make) {
    super(engine, color, seats, doors, wheels);
    this.make = make;
    this.kit = false;
    this.make = make;
  }
  addKit() {
    this.kit = true;
  }
}

const myHatchback = new Hatchback('v6', 'red', 5, 2, '15 inch spokes', 'honda');

console.log('\n');
console.log('Engine:', myHatchback.engine);
console.log('Color:', myHatchback.color);
console.log('Number of Seats:', myHatchback.seats);
console.log('Doors:', myHatchback.doors);
console.log('Wheels:', myHatchback.wheels);
console.log('Make:', myHatchback.make);
console.log('Kit:', myHatchback.kit);
myHatchback.addKit(true);
console.log('Kit:', myHatchback.kit);

class Model extends Sedan {
  constructor(engine, color, seats, doors, wheels, make, model) {
    super(engine, color, seats, doors, wheels);
    this.model = model;
    this.make = make;
  }
  changeModel(newModel) {
    this.model = newModel;
  }
}

const sedanFullFeatures = new Model(
  'v8',
  'Black',
  5,
  4,
  'chrome factory',
  'Mercedes',
  'S Class'
);
console.log('\n');
console.log('Fully loaded', sedanFullFeatures.make);
console.log('Engine:', sedanFullFeatures.engine);
console.log('Color:', sedanFullFeatures.color);
console.log('Seats:', sedanFullFeatures.seats);
console.log('Doors:', sedanFullFeatures.doors);
console.log('Wheels:', sedanFullFeatures.wheels);
// console.log("Make:",sedanFullFeatures.make);
console.log('Model:', sedanFullFeatures.model);

sedanFullFeatures.changeModel('E Class');

console.log(
  'You can also get these features in a',
  sedanFullFeatures.make,
  sedanFullFeatures.model
);
