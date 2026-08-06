import { IValidator } from '@/domain/interfaces/IValidator';
import { Sale } from '@/domain/models/sale.model';

export class SellValidator implements IValidator<Sale> {
    validate(payload: Sale): void {
        if (!Number.isInteger(payload.idClient.id) || payload.idClient.id <= 0) {
            throw new Error('El ID del cliente debe ser un número entero positivo mayor a 0.');
        }

        if (!Number.isInteger(payload.idProduct.id) || payload.idProduct.id <= 0) {
            throw new Error('El ID del producto debe ser un número entero positivo mayor a 0.');
        }

        if (!Number.isInteger(payload.idProduct.stock) || payload.idProduct.stock <= 0) {
            throw new Error('La cantidad a comprar debe ser un número entero mayor a 0.');
        }
    }
}
