import { Product } from '@/domain/entities/product.entity';
import { IProductServices } from '@/domain/interfaces/IProduct.services';
import { IProductValidator } from '@/domain/interfaces/IProduct.validator';
import { IRepository } from '@/domain/interfaces/IRepository';

export class ProductServices implements IProductServices {
    constructor(
        private readonly productRepository: IRepository<Product>,
        private readonly productValidator: IProductValidator
    ) {}

    create(payload: Product): boolean {
        this.productValidator.validate(payload);
        return this.productRepository.create(payload);
    }

    read(): Array<Product> {
        return this.productRepository.read();
    }

    update(id: number, payload: Product): boolean {
        return this.productRepository.update(id, payload);
    }

    findById(id: number): number {
        return this.productRepository.findById(id);
    }
}
