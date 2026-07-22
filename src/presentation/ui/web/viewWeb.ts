import type { CRUDF } from "../../../domain/interfaces/CRUDF";

export class ViewWeb {
    constructor(
        private inMemoryServiceProducts: CRUDF,
        private inMemoryServiceClient: CRUDF,
        private inMemoryServiceSell: CRUDF,
    ) { }

<<<<<<< HEAD
    initMensaje(): void {};

    buildMenuApp(): void {};

    processOptionSelected(option: string): void {};
=======
    initMensaje(): void { }

    buildMenuApp(): void { }

    processOptionSelected(option: string): void { }
>>>>>>> 3d1f1959cc46f9e599288ea5b4a3fa7f9ea5bcbc
}
