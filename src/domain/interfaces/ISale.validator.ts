import { IValidator } from '@/domain/interfaces/IValidator';
import { Sale } from '@/domain/entities/sale.entity';

export interface ISaleValidator extends IValidator<Sale> {}
