import type { Client } from "../entities/client";
import type { Product } from "../entities/product";

export type Sell = {
    idClient: Client,
    idProduct: Product
}
