import type { Client } from '../../domain/models/client';
import type { IClientRepository } from '../../domain/interfaces/IClientRepository';
import { inMemoryServices } from '../persistence/inMemoryServices';

export class InMemoryClientRepository extends inMemoryServices<Client> implements IClientRepository {}
