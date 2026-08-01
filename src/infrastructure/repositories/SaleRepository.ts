import { ISaleRepository } from "@/domain/interfaces/ISaleRepository";
import { Sale } from "@/domain/models/sale";
import { InMemoryRepository } from "@/infrastructure/persistence/InMemoryRepository";

export class SaleRepository extends InMemoryRepository<Sale> implements ISaleRepository {};