import { LocalStorage } from 'node-localstorage';
import { CRUDF } from '../interfaces/CRUDF';

const localStorage = new LocalStorage('./bobyData');

export class inLocalStorageService<T> implements CRUDF {
    private inMemoryDataBase: Array<any> = [];
    private storageKey:string;

    constructor(storageKey:string) {
        this.storageKey = storageKey;
        const data = localStorage.getItem(storageKey);
        this.inMemoryDataBase = data ? JSON.parse(data) : [];
    }

    private persist() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.inMemoryDataBase));
    }

    create<T>(payload: T): boolean {
        const result = this.inMemoryDataBase.push(payload) > 0;
        this.persist();
        return result;
    }

    read<T>(): Array<T> {
        return this.inMemoryDataBase;
    }

    update<T>(id: number, data: T): boolean {
        let status = true;
        let indexResult = this.inMemoryDataBase.findIndex(
            (value) => value.id === id,
        );

        if (indexResult === -1) {
            status = false;
        } else {
            this.inMemoryDataBase[indexResult] = data;
            this.persist();
        }
        return status;
    }

    delete(id: number): boolean {
        let status = true;
        let indexResult = this.inMemoryDataBase.findIndex(
            (value) => value.id === id,
        );

        if (indexResult === -1) {
            status = false;
        } else {
            this.inMemoryDataBase.splice(indexResult, 1);
            this.persist();
        }
        return status;
    }

    findById<T>(id: number): number {
        let indexResult = this.inMemoryDataBase.findIndex(
            (value) => value.id === id,
        );
        return indexResult;
    }
}
