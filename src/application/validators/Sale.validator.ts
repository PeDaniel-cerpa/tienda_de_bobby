import { ISaleValidator } from '@/domain/interfaces/ISale.validator';
import { Sale } from '@/domain/models/sale.model';

export class SaleValidator implements ISaleValidator {
    validate(payload: Sale): void {
        if (!Number.isInteger(payload.client.id) || payload.client.id <= 0) {
            throw new Error('El ID del cliente debe ser un número entero positivo mayor a 0.');
        }

        if (!Number.isInteger(payload.product.id) || payload.product.id <= 0) {
            throw new Error('El ID del producto debe ser un número entero positivo mayor a 0.');
        }
    }
}
