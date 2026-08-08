export interface ICRUD<T> {
    create(payload: T): T;
    read(): Array<T>;
    update(id: number, data: T): boolean;
    delete(id: number): boolean;
}
