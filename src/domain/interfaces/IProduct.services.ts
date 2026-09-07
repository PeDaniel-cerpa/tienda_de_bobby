import { IServices } from '@/domain/interfaces/IServices';
import { Product } from '@/domain/entities/product.entity';

export interface IProductServices extends IServices<Product> {}
