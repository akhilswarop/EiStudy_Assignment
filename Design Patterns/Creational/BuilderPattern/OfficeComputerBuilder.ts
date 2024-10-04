import { ComputerBuilder } from './ComputerBuilder';
import { Computer } from './Computer';

export class OfficeComputerBuilder implements ComputerBuilder {
    private computer: Computer = new Computer();

    setCPU(): void {
        this.computer.CPU = 'Intel Core i5';
    }

    setRAM(): void {
        this.computer.RAM = '16GB';
    }

    setStorage(): void {
        this.computer.storage = '512GB SSD';
    }

    setGPU(): void {
        this.computer.GPU = 'Integrated Graphics';
    }

    getComputer(): Computer {
        return this.computer;
    }
}
