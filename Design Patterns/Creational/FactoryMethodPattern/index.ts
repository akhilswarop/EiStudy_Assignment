import { CarFactory } from './CarFactory';
import { BikeFactory } from './BikeFactory';

const carFactory = new CarFactory();
const car = carFactory.createVehicle();
car.drive();

const bikeFactory = new BikeFactory();
const bike = bikeFactory.createVehicle();
bike.drive();
