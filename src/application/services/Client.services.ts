import { IClientValidator } from '@/domain/interfaces/IClient.validator';
import { IClientServices } from '@/domain/interfaces/IClient.services';
import { IRepository } from '@/domain/interfaces/IRepository';
import { Client } from '@/domain/entities/client.entity';

export class ClientServices implements IClientServices {
    constructor(
        private readonly clientRepository: IRepository<Client>,
        private readonly clientValidator: IClientValidator
    ) {}

    create(payload: Client): boolean {
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
