import { ICRUD } from '@/domain/interfaces/ICRUD';

export interface IRepository<T> extends ICRUD<T> {
    findById(id: number): number;
}
