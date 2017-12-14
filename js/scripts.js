function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price);
};

var huaweiP9 = new Phone('Huawei', 1500, 'black');
var iphoneX = new Phone('Apple', 5000, 'silver');
var samsungGalaxy8 = new Phone('Samsung', 3799, 'black');
var sonyXperiaZ = new Phone('Sony', 3399, 'white');

huaweiP9.printInfo();
iphoneX.printInfo();
samsungGalaxy8.printInfo();
sonyXperiaZ.printInfo();

iphoneX.category = 'premium';
samsungGalaxy8.category = 'premium';

console.log(iphoneX.category);

Phone.prototype.canIAfford = function() {
	if(this.price > 2500) {
		console.log('You dont have enought money for ' + this.brand)
	} else {
		console.log('You can have great gift, buying phone from ' + this.brand);
	}
};

huaweiP9.canIAfford();
samsungGalaxy8.canIAfford();

Phone.prototype.applyDiscount = function(discount) {
	var newPrice = this.price - discount;
	if(newPrice < 3000) {
		console.log('You can buy your imagine phone from ' + this.brand + ', for new price: ' + newPrice );
	} else {
		console.log('Not this time. Currently brand ' + this.brand + ' is out of your reach');
	}
};


console.log('Can you buy your imagine ?');
iphoneX.applyDiscount(2000);
samsungGalaxy8.applyDiscount(1588);
huaweiP9.applyDiscount(120);