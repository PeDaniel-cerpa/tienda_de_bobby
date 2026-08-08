import { IClientValidator } from '@/domain/interfaces/IClient.validator';
import { IClientServices } from '@/domain/interfaces/IClient.services';
import { Client } from '@/domain/models/client.model';
import { IRepository } from '@/domain/interfaces/IRepository';

export class ClientServices implements IClientServices {
    constructor(
        private readonly clientRepository: IRepository<Client>,
        private readonly clientValidator: IClientValidator
    ) {}

    create(payload: Client): Client {
        this.clientValidator.validate(payload);
        return this.clientRepository.create(payload);
    }

    read(): Array<Client> {
        return this.clientRepository.read();
    }

    findById(id: number): number {
        return this.clientRepository.findById(id);
    }
}
