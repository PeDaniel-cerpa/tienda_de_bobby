import { ICRUD } from '@/domain/interfaces/ICRUD';

export interface IRepository extends ICRUD {
    findById(id: number): number;
}
