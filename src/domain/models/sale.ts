import { Product } from "@/domain/models/product";
import { Client } from "@/domain/models/client";

export type Sale = {
    id: number;
    client: Client;
    product: Product;
    quantity: number;
    total: number;
}
