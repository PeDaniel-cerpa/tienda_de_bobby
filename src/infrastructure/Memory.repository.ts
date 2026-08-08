import { IRepository } from '@/domain/interfaces/IRepository';

export class MemoryRepository<T> implements IRepository<T> {
    private inMemoryDataBase: Array<any> = [];

    create(payload: T): T {
        this.inMemoryDataBase.push(payload);
        return payload;
    }

    read(): Array<T> {
        return this.inMemoryDataBase;
    }

    update(id: number, data: T): boolean {
        let status = true;
        let indexResult = this.inMemoryDataBase.findIndex((value: any) => value.id === id);

        if (indexResult === -1) {
            status = false;
        } else {
            this.inMemoryDataBase[indexResult] = data;
        }
        return status;
    }

    delete(id: number): boolean {
        let status = true;
        let indexResult = this.inMemoryDataBase.findIndex((value: any) => value.id === id);

        if (indexResult === -1) {
            status = false;
        } else {
            this.inMemoryDataBase.splice(indexResult, 1);
        }

        return status;
    }

    findById(id: number): number {
        let indexResult = this.inMemoryDataBase.findIndex((value) => value.id === id);
        return indexResult;
    }
}
