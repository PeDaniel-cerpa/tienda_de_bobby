import type { Product } from '../../domain/models/product';
import type { IProductRepository } from '../../domain/interfaces/IProductRepository';
import { inMemoryServices } from '../persistence/inMemoryServices';

export class InMemoryProductRepository extends inMemoryServices<Product> implements IProductRepository {}
