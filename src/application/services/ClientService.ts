import { IClientService } from "@/application/interfaces/IClientService";
import { ClientCreateResult } from "@/application/services-results/client/clientCreateResult";
import { ClientValidator } from "@/application/validators/ClientValidator";
import { IClientRepository } from "@/domain/interfaces/IClientRepository";
import { Client } from "@/domain/models/client";

export class ClientService implements IClientService {
    constructor(private clientRepository: IClientRepository) { }

    createClient(name: string, id?: number): ClientCreateResult {
        const validation = ClientValidator.validate(name, id);
        if (!validation.isValid) {
            return {
                success: false,
                errors: validation.errors
            };
        }

        if (id !== undefined) {
            if (this.existsClientWithId(id)) {
                return {
                    success: false,
                    errors: [`Ya existe un cliente con el ID ${id}.`]
                };
            }
            const client = this.clientRepository.create({ name, id });
            return { success: true, client };
        }

        const client = this.clientRepository.create({ name });
        return { success: true, client };
    }

    getClients(): Client[] {
        return this.clientRepository.read();
    }

    findClientById(id: number): Client | undefined {
        return this.clientRepository.findById(id);
    }

    private existsClientWithId(id: number): boolean {
        return this.clientRepository.findById(id) !== undefined;
    }
}
