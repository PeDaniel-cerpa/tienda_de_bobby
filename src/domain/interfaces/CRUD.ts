export interface CRUD {
    create<T>(payload: T): boolean;
    read<T>(): Array<T>;
    update<T>(id: number, data: T): boolean;
    delete<T>(id: number): boolean;
}
