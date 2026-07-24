import dotenv from 'dotenv';
import promptSync from 'prompt-sync';
import type { IView } from '../../../domain/interfaces/IView';
import type { ClientUseCases } from '../../../application/useCases/ClientUseCases';
import type { ProductUseCases } from '../../../application/useCases/ProductUseCases';
import type { SellUseCases } from '../../../application/useCases/SellUseCases';

const prompt = promptSync();

const envKey = `.env.${process.env.NODE_ENV || 'local'}`;
dotenv.config({ path: envKey });

export class ViewConsole implements IView {
    constructor(
        private clientUseCases: ClientUseCases,
        private productUseCases: ProductUseCases,
        private sellUseCases: SellUseCases
    ) { }

    initMensaje(): void {
        let mesagge: string =
            'Bienvenido a la tienda de Booby \n' +
            '-----------------------------------------------\n' +
            `Conectado al puerto: ${process.env.PORT || 'N/A'}\n` +
            `Modo de ejecución: ${process.env.NODE_ENV || 'local'}\n` +
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
            '1': () => this.createClient(),
            '2': () => this.showClients(),
            '3': () => this.createProduct(),
            '4': () => this.showProducts(),
            '5': () => this.createSell(),
            '6': () => console.log('Saliendo de la tienda...'),
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
        const idClient = Number(prompt('Ingrese el id del cliente: '));
        const nameClient = prompt('Ingrese el nombre del cliente: ');

        const created = this.clientUseCases.createClient(idClient, nameClient);
        if (created) {
            console.log('Cliente registrado exitosamente');
        } else {
            console.log('Error: Ya existe un cliente con ese ID');
        }

        console.table(this.clientUseCases.getClients());
    }

    showClients(): void {
        console.log('--- Lista de clientes ---');
        console.table(this.clientUseCases.getClients());
    }

    createProduct(): void {
        const idProduct = Number(prompt('Ingrese el id del producto: '));
        const nameProduct = prompt('Ingrese el nombre del producto: ');
        const stockProduct = Number(prompt('Ingrese la cantidad del producto: '));
        const priceProduct = Number(prompt('Ingrese el precio del producto: '));

        const created = this.productUseCases.createProduct(idProduct, nameProduct, stockProduct, priceProduct);

        if (created) {
            console.log('Producto registrado exitosamente');
        } else {
            console.log('Error: Ya existe un producto con ese ID');
        }

        console.table(this.productUseCases.getProducts());
    }

    showProducts(): void {
        console.log('--- Lista de productos ---');
        console.table(this.productUseCases.getProducts());
    }

    createSell(): void {
        const idClient = Number(prompt('Ingrese el id del cliente: '));
        const idProduct = Number(prompt('Ingrese el id del producto: '));
        const quantity = Number(prompt('Ingrese la cantidad a comprar: '));

        const result = this.sellUseCases.createSale(idClient, idProduct, quantity);

        if (result.success && result.sale) {
            console.log('----------------------------');
            console.log('Venta realizada con éxito');
            console.log('----------------------------');
            console.log(`Cliente: ${result.sale.client.name}`);
            console.log(`Producto: ${result.sale.product.name}`);
            console.log(`Cantidad: ${result.sale.quantity}`);
            console.log(`Valor a pagar: $ ${result.sale.total}`);
            console.log('----------------------------');
            console.table(this.sellUseCases.getSales());
        } else {
            console.log(`Error al procesar la venta: ${result.message}`);
        }
    }
}

export { ViewConsole as View };
