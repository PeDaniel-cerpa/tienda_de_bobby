export interface ICRUD {
    create<T>(payload: T): T;
    read<T>(): Array<T>;
    update<T>(id: number, data: T): boolean;
    delete<T>(id: number): boolean;
}
