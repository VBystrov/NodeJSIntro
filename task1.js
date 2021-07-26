function setABS(num) {
  this.ABS = num;
  console.log(`ABS:${num}`);
}

function setTraction(num) {
  this.traction = num;
  console.log(`Traction Control:${num}`);
}

function setStability(num) {
  this.stability = num;
  console.log(`Stability Control:${num}`);
}

function Car() {}
Car.prototype = { setABS, setTraction, setStability };

function Beginner() {
  Car.call(this);
  const option = { ABS: 5, traction: 5, stability: 5 };

  this.setABS(option.ABS);
  this.setTraction(option.traction);
  this.setStability(option.stability);
}

Beginner.prototype = Object.create(Car.prototype);

function GoodDriver() {
  const option = { ABS: 3, traction: 3, stability: 3 };

  this.setABS(option.ABS);
  this.setTraction(option.traction);
  this.setStability(option.stability);
}

GoodDriver.prototype = Object.create(Car.prototype);

function Maniac() {
  const option = { ABS: 1, traction: 1, stability: 1 };

  this.setABS(option.ABS);
  this.setTraction(option.traction);
  this.setStability(option.stability);
}

Maniac.prototype = Object.create(Car.prototype);

const beginner = new Beginner();
console.log(beginner);

const goodDriver = new GoodDriver();
console.log(goodDriver);

const maniac = new Maniac();
console.log(maniac);
