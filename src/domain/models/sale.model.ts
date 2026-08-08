import { Product } from '@/domain/models/product.model';
import { Client } from '@/domain/models/client.model';

export type Sale = {
    client: Client;
    product: Product;
};
