

function car(manufacturer, model, year, color, mileage) {
 
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
    this.color = color;
    this.mileage = mileage;
    this.printDetails = function() {
        let info = this.manufacturer + " " + this.model + ", " + this.year + ", " + this.color + ", " + this.mileage + " miles";
        console.log(info);
    }

}

let Honda = new car("Honda", "Civic", 2019, "Red", 20000);

Honda.printDetails();

let obj = {};


obj.name = "obj";
obj.info = "this is obj";
obj.printInfo = function() {
    console.log(this.name + ": " + this.info);
};
console.log(obj.name); // obj
obj.printInfo(); // obj: this is obj

obj["name"] = "new obj";
console.log(obj.name); // new obj
obj["printInfo"](); // new obj: this is obj