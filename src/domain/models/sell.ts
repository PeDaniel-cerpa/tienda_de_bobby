import type { Client } from "./client";
import type { Product } from "./product";

export type Sell = {
    id: number;
    client: Client;
    product: Product;
    quantity: number;
    total: number;
}
