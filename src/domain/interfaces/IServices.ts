export interface IServices<T> {
    create(payload: T): T;
    read(): Array<T>;
    findById?(id: number): number;
    update?(id: number, data: T): boolean;
}
