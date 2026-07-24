import type { Product } from '../../domain/models/product';
import type { IProductRepository } from '../../domain/interfaces/IProductRepository';

export class ProductUseCases {
    constructor(private productRepository: IProductRepository) {}

    createProduct(id: number, name: string, stock: number, price: number): boolean {
        const existing = this.productRepository.findById(id);
        if (existing) {
            return false;
        }
        const product: Product = { id, name, stock, price };
        return this.productRepository.create(product);
    }

    getProducts(): Product[] {
        return this.productRepository.read();
    }

    findProductById(id: number): Product | undefined {
        return this.productRepository.findById(id);
    }
}
