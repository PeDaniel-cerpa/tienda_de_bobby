"../../services/inMemoryServices";

import { inMemoryServiceClient } from "../interfaces/inMemoryServiceClient";
import { inMemoryServicesProduct } from "../interfaces/inMemoryServicesProduct";
import { inMemoryServicesSell } from "../interfaces/inMemoryServicesSell";
import { Client } from "../types/clientModel";
import { Product } from "../types/productModel";
import { Sell } from "../types/sellModel";
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
