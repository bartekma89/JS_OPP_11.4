function Car(model, manufacturer) {

	this.model = model;
	this.manufacturer = manufacturer;

}

Car.prototype.logModel = function () {
	console.log("This car's model is called " + this.model + ".");
};

var volvo = new Car('XC60', 'Volvo');

function Person(name, age) {
	
	this.name = name;
	this.age = age || 30;
	this.sayHello = function() {
		console.log('Hi, my name is ' + this.name);
	};
}

var person1 = new Person('Jan', 35);
var person2 = new Person('Adam', 32);
var person3 = new Person('Ewa');

person1.sayHello();
person2.sayHello();
