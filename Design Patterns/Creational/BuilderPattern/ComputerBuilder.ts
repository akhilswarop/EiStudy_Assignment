import { Computer } from './Computer';

export interface ComputerBuilder {
    setCPU(): void;
    setRAM(): void;
    setStorage(): void;
    setGPU(): void;
    getComputer(): Computer;
}
