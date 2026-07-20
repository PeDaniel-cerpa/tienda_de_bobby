import type { Client } from "./client"
import type { Product } from "./product"

export type Sell = {
    idClient: Client,
    idProduct: Product
}
