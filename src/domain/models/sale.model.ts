import { Product } from '@/domain/models/product.model';
import { Client } from '@/domain/models/client.model';

export type Sale = {
    idClient: Client;
    idProduct: Product;
};
