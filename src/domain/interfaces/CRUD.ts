export interface CRUD<T> {
    create(payload: T): boolean;
    read(): Array<T>;
    update(id: number, data: T): boolean;
    delete(id: number): boolean;
}

