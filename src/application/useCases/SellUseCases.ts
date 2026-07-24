import type { Sell } from '../../domain/models/sell';
import type { IClientRepository } from '../../domain/interfaces/IClientRepository';
import type { IProductRepository } from '../../domain/interfaces/IProductRepository';
import type { ISellRepository } from '../../domain/interfaces/ISellRepository';
import type { ProcessSaleResult } from '../../domain/models/processSaleResult';

export class SellUseCases {
    private saleIdCounter = 1;

    constructor(
        private clientRepository: IClientRepository,
        private productRepository: IProductRepository,
        private sellRepository: ISellRepository
    ) {}

    createSale(clientId: number, productId: number, quantity: number): ProcessSaleResult {
        const client = this.clientRepository.findById(clientId);
        if (!client) {
            return { success: false, message: 'Cliente no encontrado' };
        }

        const product = this.productRepository.findById(productId);
        if (!product) {
            return { success: false, message: 'Producto no encontrado' };
        }

        if (product.stock < quantity) {
            return {
                success: false,
                message: `Cantidad del producto no disponible, stock actual: ${product.stock}`
            };
        }

        product.stock -= quantity;
        this.productRepository.update(product.id, product);

        const total = product.price * quantity;
        const sale: Sell = {
            id: this.saleIdCounter++,
            client,
            product,
            quantity,
            total
        };

        this.sellRepository.create(sale);

        return {
            success: true,
            message: `Venta realizada con éxito. Cantidad disponible de ${product.name} = ${product.stock}`,
            sale
        };
    }

    getSales(): Sell[] {
        return this.sellRepository.read();
    }
}
