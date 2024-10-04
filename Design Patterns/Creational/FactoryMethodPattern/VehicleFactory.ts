import { Vehicle } from './Vehicle';

export abstract class VehicleFactory {
    abstract createVehicle(): Vehicle;
}
