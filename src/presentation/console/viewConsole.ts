import { IClientServices } from '@/domain/interfaces/IClient.services';
import { IClientValidator } from '@/domain/interfaces/IClient.validator';
import { IProductServices } from '@/domain/interfaces/IProduct.services';
import { ISaleServices } from '@/domain/interfaces/ISale.services';
import { Client } from '@/domain/models/client.model';
import { Product } from '@/domain/models/product.model';
import { Sale } from '@/domain/models/sale.model';
import { inMemoryServices } from '@/infrastructure/inMemoryServices';
import dotenv from 'dotenv';
import promptSync from 'prompt-sync';

const prompt = promptSync();

const envKey = `.env.${process.env.NODE_ENV || 'local'}`;
dotenv.config({ path: envKey });

export class View {
    constructor(
        private productServices: IProductServices,
        private clientServices: IClientServices,
        private saleServices: ISaleServices,
        private clientValidator: IClientValidator
    ) {}

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

        try {
            this.clientValidator.validate(dataClient);
            let clientTemp = this.clientServices.create(dataClient);
            console.log(`Cliente creado : id:${clientTemp.id} name:${clientTemp.name}`);
        } catch (error) {
            console.log('Error al crear el cliente');
            console.log((error as Error).message);
        }
    }

    showClients(): void {
        console.log('--- Lista de clientes ---');
        console.table(this.clientServices.read());
    }

    showProducts(): void {
        console.log('--- Lista de productos ---');
        console.table(this.productServices.read());
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

        if (this.productServices.create(dataProduct))
            console.log('Producto registrado exitosamente');

        console.table(this.productServices.read());
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
        console.table(this.saleServices.read());
        console.log(mesagge);
    }

    valideStock(tempProduct: Product, stockSellProduct: any): boolean {
        if (tempProduct.stock < stockSellProduct) {
            console.log(`Cantidad del producto no dispponible, stock actual ${tempProduct.stock}`);
            return false;
        } else {
            tempProduct.stock -= stockSellProduct;
            console.log(
                `venta exitosa, cantidad disponible de ${tempProduct.name} = ${tempProduct.stock}`
            );
            return true;
        }
    }

    createSell(): void {
        let idClient = Number(prompt('Ingrese el id del cliente: '));

        const temBaseClient = this.clientServices.read();
        const indexClient = this.clientServices.findById!(idClient);

        if (indexClient === -1) {
            console.log('Cliente no encontrado');
            return;
        }
        const tempClient = temBaseClient[indexClient]!;
        console.log(`Cliente encontrado ${tempClient.name}`);

        let idProduct = Number(prompt('Ingrese el id del producto: '));

        const tempBaseProduct = this.productServices.read();
        const indexProduct = this.productServices.findById!(idProduct);

        if (indexProduct === -1) {
            console.log('producto no encontrado');
            return;
        }

        const tempProduct = tempBaseProduct[indexProduct]!;
        console.log(`producto encontrado ${tempProduct.name}`);

        let stockSellProduct = Number(prompt('Ingrese la cantidad a comprar: '));

        const saleAllowed = this.valideStock(tempProduct, stockSellProduct);

        if (saleAllowed) {
            this.productServices.update!(tempProduct.id, tempProduct);

            const tempSell: Sale = {
                idClient: tempClient,
                idProduct: tempProduct,
            };

            this.saleServices.create(tempSell);
            this.printSell(tempClient, tempProduct, stockSellProduct);
        }
    }
}
