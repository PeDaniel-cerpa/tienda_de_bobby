import type { Client } from "./clientModel"
import type { Product } from "./productModel"

export type Sell = {
    idClient: Client,
    idProduct: Product
}
