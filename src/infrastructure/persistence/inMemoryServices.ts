import type { CRUD } from '../../domain/interfaces/CRUD';

export class inMemoryServices<T extends { id: number }> implements CRUD<T> {
    private inMemoryDataBase: Array<T> = [];

    create(payload: T): boolean {
        this.inMemoryDataBase.push(payload);
        return true;
    }

    read(): Array<T> {
        return [...this.inMemoryDataBase];
    }

    update(id: number, data: T): boolean {
        const indexResult = this.inMemoryDataBase.findIndex(
            (value: T) => value.id === id
        );

        if (indexResult === -1) {
            return false;
        }

        this.inMemoryDataBase[indexResult] = data;
        return true;
    }

    delete(id: number): boolean {
        const indexResult = this.inMemoryDataBase.findIndex(
            (value: T) => value.id === id
        );

        if (indexResult === -1) {
            return false;
        }

        this.inMemoryDataBase.splice(indexResult, 1);
        return true;
    }

    findById(id: number): T | undefined {
        return this.inMemoryDataBase.find((value: T) => value.id === id);
    }
}
