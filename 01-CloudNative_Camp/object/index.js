function create_car(manufacturer, model, year, color, mileage) {
    let car = {
        manufacturer: manufacturer,
        model: model,
        year: year,
        color: color,
        mileage: mileage,

        printDetails: function() {
        let info = this.manufacturer + " " + this.model + ", " + this.year + ", " + this.color + ", " + this.mileage + " miles";
        console.log(info);
        }
    };

    return car;
}

let myCar = create_car("Toyota", "Camry", 2021, "Blue", 5000);

let anotherCar = create_car("Honda", "Civic", 2019, "Red", 20000);

let thirdCar = create_car("Ford", "Mustang", 2022, "Yellow", 1000);

myCar.printDetails();
anotherCar.printDetails();
thirdCar.printDetails();

/*let car = {

    manufacturer: "BMW",
    model: "X5",
    year: 2020,
    color: "Black",
    mileage: 15000,

    printDetails: function() {
        let info = this.manufacturer + " " + this.model + ", " + this.year + ", " + this.color + ", " + this.mileage + " miles";
        console.log(info);
    }
};

car.printDetails();
*/
