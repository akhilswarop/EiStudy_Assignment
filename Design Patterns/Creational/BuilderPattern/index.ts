import { Director } from './Director';
import { GamingComputerBuilder } from './GamingComputerBuilder';
import { OfficeComputerBuilder } from './OfficeComputerBuilder';

const director = new Director();

const gamingBuilder = new GamingComputerBuilder();
director.setBuilder(gamingBuilder);
const gamingComputer = director.buildComputer();
console.log('Gaming Computer Specifications:');
gamingComputer.specifications();

const officeBuilder = new OfficeComputerBuilder();
director.setBuilder(officeBuilder);
const officeComputer = director.buildComputer();
console.log('\nOffice Computer Specifications:');
officeComputer.specifications();
