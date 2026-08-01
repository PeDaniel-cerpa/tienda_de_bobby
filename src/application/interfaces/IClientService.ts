import { ClientCreateResult } from "@/application/types/client/clientCreateResult";
import { Client } from "@/domain/models/client";

export interface IClientService {
    createClient(name: string, id?: number): ClientCreateResult;
    getClients(): Client[];
    findClientById(id: number): Client | undefined;
}
