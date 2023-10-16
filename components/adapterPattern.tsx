class DataStore {
    private data: Record<string, number> = {};

    constructor(data: Record<string, number>) {
        this.data = data;
    }

    public getData(key: string): number {
        return this.data[key] || 0;
    }
}

interface Measurement {
    getMeasurement(key: string): number;
}

class DataStoreAdapter implements Measurement {
    private dataStore: DataStore;

    constructor(data: Record<string, number>) {
        this.dataStore = new DataStore(data);
    }

    public getMeasurement(key: string): number {
        return this.dataStore.getData(key);
    }
}

const data = {
    length: 100,
    width: 50,
    height: 30
};

const measurementSource: Measurement = new DataStoreAdapter(data);

console.log(measurementSource.getMeasurement('length'));
console.log(measurementSource.getMeasurement('width'));
console.log(measurementSource.getMeasurement('height'));
console.log(measurementSource.getMeasurement('depth'));


