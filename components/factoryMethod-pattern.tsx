abstract class Car {
    abstract drive(): void;
}

class SportsCar extends Car {
    public drive() {
        console.log("Driving a sports car!");
    }
}

class SedanCar extends Car {
    public drive() {
        console.log("Driving a sedan car.");
    }
}

abstract class CarFactory {
    abstract createCar(): Car;
}

class SportsCarFactory extends CarFactory {
    public createCar() {
        return new SportsCar();
    }
}

class SedanCarFactory extends CarFactory {
    public createCar() {
        return new SedanCar();
    }
}

const sportsCarFactory = new SportsCarFactory();
const sportsCar = sportsCarFactory.createCar();
sportsCar.drive();

const sedanCarFactory = new SedanCarFactory();
const sedanCar = sedanCarFactory.createCar();
sedanCar.drive();