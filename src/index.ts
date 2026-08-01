import { ClientService } from "@/application/services/ClientService";
import { ProductService } from "@/application/services/ProductService";
import { SaleService } from "@/application/services/SaleService";
import { ClientRepository } from "@/infrastructure/repositories/ClientRepository";
import { ProductRepository } from "@/infrastructure/repositories/ProductRepository";
import { SaleRepository } from "@/infrastructure/repositories/SaleRepository";
import { ConsoleView } from "@/presentation/ui/console/Console";

const clientRepository = new ClientRepository();
const productRepository = new ProductRepository();
const sellRepository = new SaleRepository();

const clientService = new ClientService(clientRepository);
const productService = new ProductService(productRepository);
const sellService = new SaleService(clientRepository, productRepository, sellRepository);

const view = new ConsoleView(clientService, productService, sellService);

view.startMessage();