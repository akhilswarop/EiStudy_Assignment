import { VehicleFactory } from './VehicleFactory';
import { Vehicle } from './Vehicle';
import { Bike } from './Bike';

export class BikeFactory extends VehicleFactory {
    createVehicle(): Vehicle {
        return new Bike();
    }
}
