import { Product } from './../models/product.model';
import { Client } from '@/domain/models/client.model';

export interface IView {
    start(): void;
    showClients(): void;
    showProducts(): void;
    showSale(client: Client, product: Product, stock: number): void;
}
