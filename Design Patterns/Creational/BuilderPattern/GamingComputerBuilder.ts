import { ComputerBuilder } from './ComputerBuilder';
import { Computer } from './Computer';

export class GamingComputerBuilder implements ComputerBuilder {
    private computer: Computer = new Computer();

    setCPU(): void {
        this.computer.CPU = 'Intel Core i9';
    }

    setRAM(): void {
        this.computer.RAM = '32GB';
    }

    setStorage(): void {
        this.computer.storage = '1TB SSD';
    }

    setGPU(): void {
        this.computer.GPU = 'NVIDIA RTX 3080';
    }

    getComputer(): Computer {
        return this.computer;
    }
}
