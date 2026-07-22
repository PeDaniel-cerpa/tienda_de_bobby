import type { CRUDF } from "../../../domain/interfaces/CRUDF";

export class ViewWeb {
    constructor(
        private inMemoryServiceProducts: CRUDF,
        private inMemoryServiceClient: CRUDF,
        private inMemoryServiceSell: CRUDF,
    ) { }

    initMensaje(): void {};

    buildMenuApp(): void {};

    processOptionSelected(option: string): void {};
}
