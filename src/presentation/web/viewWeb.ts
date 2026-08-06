import { IRepository } from '@/domain/interfaces/IRepository';

export class ViewWeb {
    constructor(
        private inMemoryServiceProducts: IRepository,
        private inMemoryServiceClient: IRepository,
        private inMemoryServiceSell: IRepository
    ) {}

    initMensaje(): void {}

    buildMenuApp(): void {}

    processOptionSelected(option: string): void {}
}
