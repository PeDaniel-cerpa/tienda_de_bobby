import { Client } from "./clientModel"
import { Product } from "./productModel"

export type Sell = {
    idClient: Client,
    idProduct: Product
}
