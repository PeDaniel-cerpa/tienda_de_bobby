import type { Product } from '@/domain/models/product.js';
import type { IRepository } from '@/domain/interfaces/IRepository.js';

export interface IProductRepository extends IRepository<Product> {}

