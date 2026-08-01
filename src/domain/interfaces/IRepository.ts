export interface IRepository<T> {
    create(payload: Omit<T, 'id'> & { id?: number }): T;
    read(): Array<T>;
    update(id: number, data: Partial<T>): boolean;
    delete(id: number): boolean;
    findById(id: number): T | undefined;
}
