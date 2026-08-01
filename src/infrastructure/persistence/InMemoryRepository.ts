import { IRepository } from "@/domain/interfaces/IRepository";

export class InMemoryRepository<T extends { id: number }> implements IRepository<T> {
    private inMemoryDataBase: Array<T> = [];
    private nextId = 1;

    create(payload: Omit<T, 'id'> & { id?: number }): T {
        const id = payload.id ?? this.nextId++;
        if (id >= this.nextId) {
            this.nextId = id + 1;
        }
        const newItem = { ...payload, id } as T;
        this.inMemoryDataBase.push(newItem);
        return newItem;
    }

    read(): Array<T> {
        return [...this.inMemoryDataBase];
    }

    update(id: number, data: Partial<T>): boolean {
        const indexResult = this.inMemoryDataBase.findIndex(
            (value: T) => value.id === id
        );

        if (indexResult === -1) {
            return false;
        }

        this.inMemoryDataBase[indexResult] = Object.assign(
            {},
            this.inMemoryDataBase[indexResult],
            data
        );
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
