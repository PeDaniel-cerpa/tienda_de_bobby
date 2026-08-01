import { IClientRepository } from "@/domain/interfaces/IClientRepository";
import { Client } from "@/domain/models/client";
import { InMemoryRepository } from "@/infrastructure/persistence/InMemoryRepository";

export class ClientRepository extends InMemoryRepository<Client> implements IClientRepository {};