import { Client } from "@/domain/entities/client.entity";
import { Product } from "@/domain/entities/product.entity";



export type Sale = {
    client: Client;
    product: Product;
};
