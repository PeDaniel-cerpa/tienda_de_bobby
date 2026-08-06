import { IValidator } from '@/domain/interfaces/IValidator';
import { Product } from '@/domain/models/product.model';

export class ProductValidator implements IValidator<Product> {
    validate(payload: Product): void {
        if (!payload.name || payload.name.trim().length < 2) {
            throw new Error('El nombre del producto debe tener al menos 2 caracteres.');
        }

        if (!Number.isInteger(payload.stock) || payload.stock < 0) {
            throw new Error('El stock debe ser un número entero mayor o igual a 0.');
        }

        if (isNaN(payload.price) || payload.price <= 0) {
            throw new Error('El precio debe ser un número positivo mayor a 0.');
        }

        if (payload.id !== undefined && (!Number.isInteger(payload.id) || payload.id <= 0)) {
            throw new Error('El ID del producto debe ser un número entero positivo mayor a 0.');
        }
    }
}
