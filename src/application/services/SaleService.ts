import { ISellService } from "@/application/interfaces/ISellService";
import { ProcessSaleResult } from "@/application/types/sale/processSaleResult";
import { SellValidator } from "@/application/validators/SellValidator";
import { IClientRepository } from "@/domain/interfaces/IClientRepository";
import { IProductRepository } from "@/domain/interfaces/IProductRepository";
import { ISaleRepository } from "@/domain/interfaces/ISaleRepository";
import { Sale } from "@/domain/models/sale";
import { Product } from "@/domain/models/product";
import { Client } from "@/domain/models/client";

export class SaleService implements ISellService {
    constructor(
        private clientRepository: IClientRepository,
        private productRepository: IProductRepository,
        private sellRepository: ISaleRepository
    ) { }

    createSale(clientId: number, productId: number, quantity: number): ProcessSaleResult {
        const validation = SellValidator.validate(clientId, productId, quantity);
        if (!validation.isValid) {
            return {
                success: false,
                status: 'INVALID_INPUT',
                errors: validation.errors
            };
        }

        const client = this.loadClient(clientId);
        if (!client) {
            return { success: false, status: 'CLIENT_NOT_FOUND' };
        }

        const product = this.loadProduct(productId);
        if (!product) {
            return { success: false, status: 'PRODUCT_NOT_FOUND' };
        }

        if (!this.hasSufficientStock(product, quantity)) {
            return {
                success: false,
                status: 'INSUFFICIENT_STOCK'
            };
        }

        const updatedProduct = this.reduceProductStock(product, quantity);
        this.productRepository.update(updatedProduct.id, updatedProduct);

        const total = this.calculateTotal(updatedProduct, quantity);
        const sale = this.sellRepository.create({
            client,
            product: updatedProduct,
            quantity,
            total
        });

        return {
            success: true,
            status: 'SUCCESS',
            sale
        };
    }

    getSales(): Sale[] {
        return this.sellRepository.read();
    }

    private loadClient(clientId: number): Client | undefined {
        return this.clientRepository.findById(clientId);
    }

    private loadProduct(productId: number): Product | undefined {
        return this.productRepository.findById(productId);
    }

    private hasSufficientStock(product: Product, quantity: number): boolean {
        return product.stock >= quantity;
    }

    private reduceProductStock(product: Product, quantity: number): Product {
        return {
            ...product,
            stock: product.stock - quantity
        };
    }

    private calculateTotal(product: Product, quantity: number): number {
        return product.price * quantity;
    }
}
