import { IProductRepository } from '@/domain/interfaces/IProduct.repository';
import { IProductServices } from '@/domain/interfaces/IProduct.services';
import { Product } from '@/domain/models/product.model';

export class ProductServices implements IProductServices {
    constructor(private productRepository: IProductRepository) {}

    create(payload: Product): Product {
        this.productRepository.create(payload);
        return payload;
    }

    read(): Array<Product> {
        return this.productRepository.read();
    }

    update(id: number, payload: Product): boolean {
        this.productRepository.update(id, payload);
        return true;
    }

    findById(id: number): number {
        return this.productRepository.findById(id);
    }
}
