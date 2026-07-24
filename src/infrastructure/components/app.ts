import { Application } from "../../application/services/Application";
import { InMemoryClientRepository } from "../repositories/InMemoryClientRepository";
import { InMemoryProductRepository } from "../repositories/InMemoryProductRepository";
import { InMemorySellRepository } from "../repositories/InMemorySellRepository";
import { ViewConsole } from "../../presentation/ui/console/viewConsole";
import { ClientUseCases } from "../../application/useCases/ClientUseCases";
import { ProductUseCases } from "../../application/useCases/ProductUseCases";
import { SellUseCases } from "../../application/useCases/SellUseCases";

const clientRepository = new InMemoryClientRepository();
const productRepository = new InMemoryProductRepository();
const sellRepository = new InMemorySellRepository();

const clientUseCases = new ClientUseCases(clientRepository);
const productUseCases = new ProductUseCases(productRepository);
const sellUseCases = new SellUseCases(clientRepository, productRepository, sellRepository);

const view = new ViewConsole(clientUseCases, productUseCases, sellUseCases);

const app = new Application(view);

export default app;
