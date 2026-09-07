import { IValidator } from '@/domain/interfaces/IValidator';
import { Product } from '@/domain/entities/product.entity';

export interface IProductValidator extends IValidator<Product> {}
