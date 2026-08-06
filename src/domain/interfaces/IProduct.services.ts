import { IServices } from '@/domain/interfaces/IServices';
import { Product } from '@/domain/models/product.model';

export interface IProductServices extends IServices<Product> {}
