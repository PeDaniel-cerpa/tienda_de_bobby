import { IProductService } from "@/application/interfaces/IProductService";
import { ProductCreateResult } from "@/application/types/product/productCreateResult";
import { ProductValidator } from "@/application/validators/ProductValidator";
import { IProductRepository } from "@/domain/interfaces/IProductRepository";
import { Product } from "@/domain/models/product";

export class ProductService implements IProductService {
    constructor(private productRepository: IProductRepository) { }

    createProduct(name: string, stock: number, price: number, id?: number): ProductCreateResult {
        const validation = ProductValidator.validate(name, stock, price, id);
        if (!validation.isValid) {
            return {
                success: false,
                errors: validation.errors
            };
        }

        if (id !== undefined) {
            if (this.existsProductWithId(id)) {
                return {
                    success: false,
                    errors: [`Ya existe un producto con el ID ${id}.`]
                };
            }
            const product = this.productRepository.create({ name, stock, price, id });
            return { success: true, product };
        }

        const product = this.productRepository.create({ name, stock, price });
        return { success: true, product };
    }

    getProducts(): Product[] {
        return this.productRepository.read();
    }

    findProductById(id: number): Product | undefined {
        return this.productRepository.findById(id);
    }

    private existsProductWithId(id: number): boolean {
        return this.productRepository.findById(id) !== undefined;
    }
}
