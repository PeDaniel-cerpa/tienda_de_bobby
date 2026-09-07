import { ClientServices } from '@/application/services/Client.services';
import { ProductServices } from '@/application/services/Product.services';
import { SaleServices } from '@/application/services/Sale.services';
import { ClientValidator } from '@/application/validators/Client.validator';
import { ProductValidator } from '@/application/validators/Product.validator';
import { SaleValidator } from '@/application/validators/Sale.validator';
import { Client } from '@/domain/entities/client.entity';
import { Product } from '@/domain/entities/product.entity';
import { Sale } from '@/domain/entities/sale.entity';
import { MemoryRepository } from '@/infrastructure/Memory.repository';
import { View } from '@/presentation/console/viewConsole';

const productRepository = new MemoryRepository<Product>();
const clientRepository = new MemoryRepository<Client>();
const saleRepository = new MemoryRepository<Sale>();

const clientValidator = new ClientValidator();
const productValidator = new ProductValidator();
const saleValidator = new SaleValidator();

const clientServices = new ClientServices(clientRepository, clientValidator);
const productServices = new ProductServices(productRepository, productValidator);
const saleServices = new SaleServices(saleRepository, saleValidator);

const view = new View(productServices, clientServices, saleServices);

view.start();

