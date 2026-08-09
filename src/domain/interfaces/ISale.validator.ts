import { IValidator } from '@/domain/interfaces/IValidator';
import { Sale } from '@/domain/models/sale.model';

export interface ISaleValidator extends IValidator<Sale> {}
