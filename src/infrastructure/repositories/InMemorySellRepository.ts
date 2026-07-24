import type { Sell } from '../../domain/models/sell';
import type { ISellRepository } from '../../domain/interfaces/ISellRepository';
import { inMemoryServices } from '../persistence/inMemoryServices';

export class InMemorySellRepository extends inMemoryServices<Sell> implements ISellRepository {}
