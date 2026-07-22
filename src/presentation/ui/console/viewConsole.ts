<<<<<<< HEAD:src/ui/console/viewConsole.ts
'../../services/inMemoryServices';

import type { Client } from '../../domain/entities/client';
import type { Product } from '../../domain/entities/product';
import type { Sell } from '../../domain/entities/sell';
import { inMemoryServices } from '../../infrastructure/persistence/inMemoryServices';
import dotenv from 'dotenv';
import promptSync from 'prompt-sync';
import type { productRepository } from '../../domain/repositories/productRepository';
import type { clientRepository } from '../../domain/repositories/clientRepository';
import type { sellRepository } from '../../domain/repositories/sellRepository';
=======
import dotenv from 'dotenv';
import promptSync from 'prompt-sync';
import type { Client } from '../../../domain/models/client';
import type { CRUDF } from '../../../domain/interfaces/CRUDF';
import type { Product } from '../../../domain/models/product';
import type { Sell } from '../../../domain/models/sell';
import type { inMemoryServices } from '../../../infrastructure/persistence/inMemoryServices';
>>>>>>> fix-directories:src/presentation/ui/console/viewConsole.ts


const prompt = promptSync();

const envKey = `.env.${process.env.NODE_ENV || 'local'}`;
dotenv.config({ path: envKey });

export class View {
    constructor(
<<<<<<< HEAD:src/ui/console/viewConsole.ts
        private inMemoryServiceProducts: productRepository,
        private inMemoryServiceClient: clientRepository,
        private inMemoryServiceSell: sellRepository,
=======
        private inMemoryServiceProducts: CRUDF,
        private inMemoryServiceClient: CRUDF,
        private inMemoryServiceSell: CRUDF
>>>>>>> fix-directories:src/presentation/ui/console/viewConsole.ts
    ) { }

    initMensaje(): void {
        let mesagge: string =
            'Bienvenido a la tienda de Booby \n' +
            '-----------------------------------------------\n' +
            `Conectado al puerto: ${process.env.PORT}\n` +
            `Modo de ejecución: ${process.env.NODE_ENV}\n` +
            '-----------------------------------------------\n' +
            'Ahora sin promesas!!!\n';
        console.log(mesagge);
        this.buildMenuApp();
    }

    buildMenuApp(): void {
        while (true) {
            let mesagge: string =
                '----------------------------\n' +
                'Seleccione una opción\n' +
                '----------------------------\n' +
                '1. Registrar cliente \n' +
                '2. Ver Clientes \n' +
                '3. Registrar producto \n' +
                '4. Ver productos \n' +
                '5. Crear venta \n' +
                '6. Salir \n' +
                '----------------------------\n';
            console.log(mesagge);

            const selectedOption = prompt('Ingrese una opción: ');
            const shouldExit = this.processOptionSelected(selectedOption);

            if (shouldExit) {
                break;
            }
        }
    }

    processOptionSelected(option: string): boolean {
        const handlers: Record<string, () => void> = {
            '1': () => {
                this.createClient();
            },
            '2': () => {
                this.showClients();
            },
            '3': () => {
                this.createProduct();
            },
            '4': () => {
                this.showProducts();
            },
            '5': () => {
                this.createSell();
            },
            '6': () => {
                console.log('Saliendo de la tienda...');
            },
        };

        const handler = handlers[option];

        if (handler) {
            handler();
            return option === '6';
        }

        console.log('Opción inválida, intente nuevamente.');
        return false;
    }

    createClient(): void {
        let idClient: number = Number(prompt('Ingrese el id del cliente: '));

        let nameClient: string = prompt('Ingrese el nombre del cliente: ');
        let dataClient: Client = {
            id: idClient,
            name: nameClient,
        };

        if (this.inMemoryServiceClient.create<Client>(dataClient))
            console.log('cliente registrado exitosamente');

        console.table(this.inMemoryServiceClient.read<Client>());
    }


    showClients(): void {
        console.log('--- Lista de clientes ---');
        console.table(this.inMemoryServiceClient.read<Client>());
    }

    showProducts(): void {
        console.log('--- Lista de productos ---');
        console.table(this.inMemoryServiceProducts.read<Product>());
    }

    createProduct(): void {
        let idProdcut = Number(prompt('Ingrese el id del producto: '));
        let nameProdcut = prompt('Ingrese el nombre del producto: ');
        let stockProdcut = Number(prompt('Ingrese la cantidad del producto: '));
        let priceProdcut = Number(prompt('Ingrese el precio del producto: '));

        let dataProduct: Product = {
            id: idProdcut,
            name: nameProdcut,
            stock: stockProdcut,
            price: priceProdcut,
        };

        if (this.inMemoryServiceProducts.create<Product>(dataProduct))
            console.log('Producto registrado exitosamente');

        console.table(this.inMemoryServiceProducts.read());
    }

    valideId(id: number, data: inMemoryServices<Client>) {
        const tempBase = data.read<Client>();
        const index = data.findById(id);

        if (id === -1) {
            console.log('Cliente no encontrado');
            return;
        }

        return tempBase[index];
    }

    printSell(tempClient: Client, tempProduct: Product, stockSellProduct: any) {
        let mesagge: string =
            '----------------------------\n' +
            'Venta realizada con exito\n' +
            '----------------------------\n' +
            `Cliente: ${tempClient.name}\n` +
            `Producto: ${tempProduct.name}\n` +
            `Cantidad: ${stockSellProduct}\n` +
            `Valor a pagar: $ ${tempProduct.price * stockSellProduct}\n` +
            '----------------------------\n';
        console.table(this.inMemoryServiceSell.read());
        console.log(mesagge);
    }

    valideStock(tempProduct: Product, stockSellProduct: any): boolean {
        if (tempProduct.stock < stockSellProduct) {
            console.log(
                `Cantidad del producto no dispponible, stock actual ${tempProduct.stock}`,
            );
            return false;
        } else {
            tempProduct.stock -= stockSellProduct;
            console.log(
                `venta exitosa, cantidad disponible de ${tempProduct.name} = ${tempProduct.stock}`,
            );
            return true;
        }
    }

    createSell(): void {
        let idClient = Number(prompt('Ingrese el id del cliente: '));

        const temBaseClient = this.inMemoryServiceClient.read<Client>();
        const indexClient = this.inMemoryServiceClient.findById(idClient);

        if (indexClient === -1) {
            console.log('Cliente no encontrado');
            return;
        }
        const tempClient = temBaseClient[indexClient]!;
        console.log(`Cliente encontrado ${tempClient.name}`);

        let idProduct = Number(prompt('Ingrese el id del producto: '));

        const tempBaseProduct = this.inMemoryServiceProducts.read<Product>();
        const indexProduct = this.inMemoryServiceProducts.findById(idProduct);

        if (indexProduct === -1) {
            console.log('producto no encontrado');
            return;
        }

        const tempProduct = tempBaseProduct[indexProduct]!;
        console.log(`producto encontrado ${tempProduct.name}`);

        let stockSellProduct = Number(prompt('Ingrese la cantidad a comprar: '));

        const saleAllowed = this.valideStock(tempProduct, stockSellProduct);

        if (saleAllowed) {
            this.inMemoryServiceProducts.update<Product>(tempProduct.id, tempProduct);

            const tempSell: Sell = {
                idClient: tempClient,
                idProduct: tempProduct,
            };

            this.inMemoryServiceSell.create(tempSell);
            this.printSell(tempClient, tempProduct, stockSellProduct);
        }
    }
}
