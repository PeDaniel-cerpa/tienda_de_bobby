import type { Client } from "@/domain/models/client.js";
import type { IRepository } from "@/domain/interfaces/IRepository.js";


export interface IClientRepository extends IRepository<Client> {}

