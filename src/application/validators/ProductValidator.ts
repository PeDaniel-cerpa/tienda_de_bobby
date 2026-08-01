import { ValidationResult } from "@/application/types/validator/validatorResult";

export class ProductValidator {
    static validate(name: string, stock: number, price: number, id?: number): ValidationResult {
        const errors: string[] = [];

        if (!name || name.trim().length < 2) {
            errors.push('El nombre del producto debe tener al menos 2 caracteres.');
        }

        if (!Number.isInteger(stock) || stock < 0) {
            errors.push('El stock debe ser un número entero mayor o igual a 0.');
        }

        if (isNaN(price) || price <= 0) {
            errors.push('El precio debe ser un número positivo mayor a 0.');
        }

        if (id !== undefined && (!Number.isInteger(id) || id <= 0)) {
            errors.push('El ID del producto debe ser un número entero positivo mayor a 0.');
        }

        return {
            isValid: errors.length === 0,
            errors
        };
    }
}
