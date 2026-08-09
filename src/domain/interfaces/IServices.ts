export interface IServices<T> {
    create(payload: T): boolean;
    read(): Array<T>;
    findById?(id: number): number;
    update?(id: number, data: T): boolean;
}
