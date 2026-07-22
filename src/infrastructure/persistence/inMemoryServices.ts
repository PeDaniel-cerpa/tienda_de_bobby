<<<<<<< HEAD
<<<<<<< HEAD
import type { CRUDF } from "../../domain/repositories/CRUDF";
=======
import type { CRUDF } from '../../domain/interfaces/CRUDF';
>>>>>>> fix-directories
=======
import type { CRUDF } from "../../domain/interfaces/CRUDF";
>>>>>>> 3d1f1959cc46f9e599288ea5b4a3fa7f9ea5bcbc

export class inMemoryServices<T> implements CRUDF {
    private inMemoryDataBase: Array<any> = [];

    create<T>(payload: T): boolean {
        return this.inMemoryDataBase.push(payload) > 0
    }

    read<T>(): Array<T> {
        return this.inMemoryDataBase;
    }

    update<T>(id: number, data: T): boolean {
        let status = true;
        let indexResult = this.inMemoryDataBase.findIndex(
            (value: any) => value.id === id
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
            (value: any) => value.id === id
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
            (value) => value.id === id
        );
        return indexResult;
    }
}
