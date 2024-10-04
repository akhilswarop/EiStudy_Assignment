import { ComputerBuilder } from './ComputerBuilder';
import { Computer } from './Computer';

export class Director {
    private builder: ComputerBuilder;

    setBuilder(builder: ComputerBuilder): void {
        this.builder = builder;
    }

    buildComputer(): Computer {
        this.builder.setCPU();
        this.builder.setRAM();
        this.builder.setStorage();
        this.builder.setGPU();
        return this.builder.getComputer();
    }
}
