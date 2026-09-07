import { Client } from "@/domain/entities/client.entity";
import { Product } from "@/domain/entities/product.entity";


export interface IView {
    start(): void;
    showClients(): void;
    showProducts(): void;
    showSale(client: Client, product: Product, stock: number): void;
}
