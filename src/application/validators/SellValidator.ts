import { ValidationResult } from "@/application/types/validator/validatorResult";

export class SellValidator {
    static validate(clientId: number, productId: number, quantity: number): ValidationResult {
        const errors: string[] = [];

        if (!Number.isInteger(clientId) || clientId <= 0) {
            errors.push('El ID del cliente debe ser un número entero positivo mayor a 0.');
        }

        if (!Number.isInteger(productId) || productId <= 0) {
            errors.push('El ID del producto debe ser un número entero positivo mayor a 0.');
        }

        if (!Number.isInteger(quantity) || quantity <= 0) {
            errors.push('La cantidad a comprar debe ser un número entero mayor a 0.');
        }

        return {
            isValid: errors.length === 0,
            errors
        };
    }
}
