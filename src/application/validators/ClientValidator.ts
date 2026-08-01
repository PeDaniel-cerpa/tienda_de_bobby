import { ValidationResult } from "@/application/types/validator/validatorResult";

export class ClientValidator {
    static validate(name: string, id?: number): ValidationResult {
        const errors: string[] = [];

        if (!name || name.trim().length < 2) {
            errors.push('El nombre del cliente debe tener al menos 2 caracteres.');
        }

        if (id !== undefined && (!Number.isInteger(id) || id <= 0)) {
            errors.push('El ID del cliente debe ser un número entero positivo mayor a 0.');
        }

        return {
            isValid: errors.length === 0,
            errors
        };
    }
}
