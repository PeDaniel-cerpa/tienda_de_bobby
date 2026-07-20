import type { Product } from "../models/product";

export interface IProductRepository {
    
    create(client: Product): boolean;
    show(): Product;
}