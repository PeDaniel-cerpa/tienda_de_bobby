import { ISaleRepository } from '@/domain/interfaces/ISale.repository';
import { ISaleServices } from '@/domain/interfaces/ISale.services';
import { Sale } from '@/domain/models/sale.model';

export class SaleServices implements ISaleServices {
    constructor(private saleRepository: ISaleRepository) {}

    create(payload: Sale): Sale {
        this.saleRepository.create(payload);
        return payload;
    }

    read(): Array<Sale> {
        return this.saleRepository.read();
    }

    update(id: number, payload: Sale): boolean {
        this.saleRepository.update(id, payload);
        return true;
    }

    findById(id: number): number {
        return this.saleRepository.findById(id);
    }
}
