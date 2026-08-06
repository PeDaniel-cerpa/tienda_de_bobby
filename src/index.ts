import { ClientServices } from '@/application/services/Client.services';
import { ProductServices } from '@/application/services/Product.services';
import { SaleServices } from '@/application/services/Sale.services';
import { ClientValidator } from '@/application/validators/Client.validator';
import { Client } from '@/domain/models/client.model';
import { Product } from '@/domain/models/product.model';
import { Sale } from '@/domain/models/sale.model';
import { inMemoryServices } from '@/infrastructure/inMemoryServices';
import { View } from '@/presentation/console/viewConsole';

const peoductRepository = new inMemoryServices<Product>();
const clientRepository = new inMemoryServices<Client>();
const saleRepository = new inMemoryServices<Sale>();

const clientValidator = new ClientValidator();

const clientServices = new ClientServices(clientRepository);
const productServices = new ProductServices(peoductRepository);
const saleServices = new SaleServices(saleRepository);

const view = new View(productServices, clientServices, saleServices, clientValidator);

view.initMensaje();
