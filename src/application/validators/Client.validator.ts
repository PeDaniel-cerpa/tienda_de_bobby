import { Client } from '@/domain/entities/client.entity';
import { IClientValidator } from '@/domain/interfaces/IClient.validator';

export class ClientValidator implements IClientValidator {
    validate(payload: Client): void {
        if (!payload.name || payload.name.trim().length < 2) {
            throw new Error('El nombre del cliente debe tener al menos 2 caracteres.');
        }

        if (payload.id !== undefined && (!Number.isInteger(payload.id) || payload.id <= 0)) {
            throw new Error('El ID del cliente debe ser un número entero positivo mayor a 0.');
        }
    }
}
