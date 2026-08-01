import { IProductRepository } from "@/domain/interfaces/IProductRepository";
import { Product } from "@/domain/models/product";
import { InMemoryRepository } from "@/infrastructure/persistence/InMemoryRepository";

export class ProductRepository extends InMemoryRepository<Product> implements IProductRepository {};