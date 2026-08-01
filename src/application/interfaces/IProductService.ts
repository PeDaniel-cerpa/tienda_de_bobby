import type { Product } from "@/domain/models/product.js";
import type { ProductCreateResult } from "@/application/types/product/productCreateResult.js";

export interface IProductService {
    createProduct(name: string, stock: number, price: number, id?: number): ProductCreateResult;
    getProducts(): Product[];
    findProductById(id: number): Product | undefined;
}
