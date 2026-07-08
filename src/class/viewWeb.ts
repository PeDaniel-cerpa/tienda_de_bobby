"../../services/inMemoryServices";

import type { inMemoryServiceClient } from "../interfaces/inMemoryServiceClient";
import type { inMemoryServicesProduct } from "../interfaces/inMemoryServicesProduct";
import type { inMemoryServicesSell } from "../interfaces/inMemoryServicesSell";
import type { Client } from "../types/clientModel";
import type { Product } from "../types/productModel";
import type { Sell } from "../types/sellModel";
import { inMemoryServices } from "./inMemoryServices";

export class ViewWeb {
    constructor(
        private inMemoryServiceProducts: inMemoryServicesProduct,
        private inMemoryServiceClient: inMemoryServiceClient,
        private inMemoryServiceSell: inMemoryServicesSell,
    ) {}

    initMensaje(): void {}

    buildMenuApp(): void {}

    processOptionSelected(option: string): void {}
}
