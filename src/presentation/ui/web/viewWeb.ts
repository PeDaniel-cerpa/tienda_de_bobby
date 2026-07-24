import type { IView } from "../../../domain/interfaces/IView";
import type { ClientUseCases } from "../../../application/use-cases/ClientUseCases";
import type { ProductUseCases } from "../../../application/use-cases/ProductUseCases";
import type { SellUseCases } from "../../../application/use-cases/SellUseCases";

export class ViewWeb implements IView {
    constructor(
        private clientUseCases: ClientUseCases,
        private productUseCases: ProductUseCases,
        private sellUseCases: SellUseCases,
    ) { }

    initMensaje(): void {};

    buildMenuApp(): void {};

    processOptionSelected(option: string): void {};
}
