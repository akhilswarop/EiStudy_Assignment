export class OfficeConfig {
    private static instance: OfficeConfig;
    private numberOfRooms: number = 0;

    private constructor() {}

    static getInstance(): OfficeConfig {
        if (!OfficeConfig.instance) {
            OfficeConfig.instance = new OfficeConfig();
        }
        return OfficeConfig.instance;
    }

    setNumberOfRooms(count: number): void {
        this.numberOfRooms = count;
    }

    getNumberOfRooms(): number {
        return this.numberOfRooms;
    }
}
