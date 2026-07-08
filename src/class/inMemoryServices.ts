import type { CRUDF } from "../interfaces/CRUDF";

export class inMemoryServices<T> implements CRUDF {
    private inMemoryDataBase: Array<any> = [];

    create<T>(payload: T): boolean {
        return this.inMemoryDataBase.push(payload) > 0;
    }

    read<T>(): Array<T> {
        return this.inMemoryDataBase;
    }

    update<T>(id: number, data: T): boolean {
        let status = true;
        let indexResult = this.inMemoryDataBase.findIndex(
            (value: any) => value.id === id,
        );

        if (indexResult === -1) {
            status = false;
        } else {
            this.inMemoryDataBase[indexResult] = data;
        }
        return status;
    }

    delete(id: number): boolean {
        let status = true;
        let indexResult = this.inMemoryDataBase.findIndex(
            (value: any) => value.id === id,
        );

        if (indexResult === -1) {
            status = false;
        } else {
            this.inMemoryDataBase.splice(indexResult, 1);
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
