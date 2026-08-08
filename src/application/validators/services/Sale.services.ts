import { IRepository } from '@/domain/interfaces/IRepository';
import { ISaleServices } from '@/domain/interfaces/ISale.services';
import { ISaleValidator } from '@/domain/interfaces/ISale.validator';
import { Sale } from '@/domain/models/sale.model';

export class SaleServices implements ISaleServices {
    constructor(
        private readonly saleRepository: IRepository<Sale>,
        private readonly saleValidator: ISaleValidator
    ) {}

    create(payload: Sale): Sale {
        this.saleValidator.validate(payload);
        return this.saleRepository.create(payload);
    }

    read(): Array<Sale> {
        return this.saleRepository.read();
    }

    update(id: number, payload: Sale): boolean {
        return this.saleRepository.update(id, payload);
    }

    findById(id: number): number {
        return this.saleRepository.findById(id);
    }
}
