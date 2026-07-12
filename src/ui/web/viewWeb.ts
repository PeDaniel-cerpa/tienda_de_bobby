"../../services/inMemoryServices";

import type { CRUDF } from "../../interfaces/CRUDF";
import type { Client } from "../../types/clientModel";
import type { Product } from "../../types/productModel";
import type { Sell } from "../../types/sellModel";
import { inMemoryServices } from "../../class/inMemoryServices";

export class ViewWeb {
    constructor(
        private inMemoryServiceProducts: CRUDF,
        private inMemoryServiceClient: CRUDF,
        private inMemoryServiceSell: CRUDF,
    ) { }

    initMensaje(): void { }

    buildMenuApp(): void { }

    processOptionSelected(option: string): void { }
}
