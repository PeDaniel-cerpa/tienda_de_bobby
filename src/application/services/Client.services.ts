import { IClientRepository } from '@/domain/interfaces/IClient.repository';
import { IClientServices } from '@/domain/interfaces/IClient.services';
import { Client } from '@/domain/models/client.model';

export class ClientServices implements IClientServices {
    constructor(private clientRepository: IClientRepository) {}

    create(payload: Client): Client {
        return this.clientRepository.create(payload);
    }

    read(): Array<Client> {
        return this.clientRepository.read();
    }

    findById(id: number): number {
        return this.clientRepository.findById(id);
    }
}
