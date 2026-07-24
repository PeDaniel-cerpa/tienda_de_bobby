import type { Client } from '../../domain/models/client';
import type { IClientRepository } from '../../domain/interfaces/IClientRepository';

export class ClientUseCases {
    constructor(private clientRepository: IClientRepository) {}

    createClient(id: number, name: string): boolean {
        const existing = this.clientRepository.findById(id);
        if (existing) {
            return false;
        }
        const client: Client = { id, name };
        return this.clientRepository.create(client);
    }

    getClients(): Client[] {
        return this.clientRepository.read();
    }

    findClientById(id: number): Client | undefined {
        return this.clientRepository.findById(id);
    }
}
