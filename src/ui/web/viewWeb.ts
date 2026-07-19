import type { Client } from "../../domain/entities/client";
import type { Product } from "../../domain/entities/product";
import type { Sell } from "../../domain/entities/sell";
import { inMemoryServices } from "../../infrastructure/persistence/inMemoryServices";
import type { CRUDF } from "../../domain/repositories/CRUDF";
import type { productRepository } from "../../domain/repositories/productRepository";
import type { clientRepository } from "../../domain/repositories/clientRepository";
import type { sellRepository } from "../../domain/repositories/sellRepository";

export class ViewWeb {
    constructor(
        private inMemoryServiceProducts: productRepository,
        private inMemoryServiceClient: clientRepository,
        private inMemoryServiceSell: sellRepository,
    ) { }

    initMensaje(): void { }

    buildMenuApp(): void { }

    processOptionSelected(option: string): void { }
}
