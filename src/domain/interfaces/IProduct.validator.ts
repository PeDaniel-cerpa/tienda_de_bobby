import { IValidator } from '@/domain/interfaces/IValidator';
import { Product } from '@/domain/models/product.model';

export interface IProductValidator extends IValidator<Product> {}
