import type { IClientService } from '@/application/interfaces/IClientService.js';
import type { IProductService } from '@/application/interfaces/IProductService.js';
import type { ISellService } from '@/application/interfaces/ISellService.js';
import dotenv from 'dotenv';
import promptSync from 'prompt-sync';

const prompt = promptSync();

const envKey = `.env.${process.env.NODE_ENV || 'local'}`;
dotenv.config({ path: envKey });

export class ConsoleView {
    constructor(
        private clientService: IClientService,
        private productService: IProductService,
        private sellService: ISellService
    ) {}

    startMessage(): void {
        let message: string =
            'Bienvenido a la tienda de Bobby \n' +
            '-----------------------------------------------\n' +
            `Conectado al puerto: ${process.env.PORT || 'N/A'}\n` +
            `Modo de ejecución: ${process.env.NODE_ENV || 'local'}\n` +
            '-----------------------------------------------\n' +
            'Ahora sin promesas!!!\n';
        console.log(message);
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
        const idInput = prompt('Ingrese el ID del cliente (opcional, Enter para autogenerar): ');
        const idClient = idInput.trim() !== '' ? Number(idInput) : undefined;
        const nameClient = prompt('Ingrese el nombre del cliente: ');

        const result = this.clientService.createClient(nameClient, idClient);
        if (result.success && result.client) {
            console.log(`Cliente registrado exitosamente con ID ${result.client.id}`);
        } else {
            console.log('Error al registrar cliente:');
            result.errors?.forEach(err => console.log(` - ${err}`));
        }

        console.table(this.clientService.getClients());
    }

    showClients(): void {
        console.log('--- Lista de clientes ---');
        console.table(this.clientService.getClients());
    }

    createProduct(): void {
        const idInput = prompt('Ingrese el ID del producto (opcional, Enter para autogenerar): ');
        const idProduct = idInput.trim() !== '' ? Number(idInput) : undefined;
        const nameProduct = prompt('Ingrese el nombre del producto: ');
        const stockProduct = Number(prompt('Ingrese la cantidad del producto: '));
        const priceProduct = Number(prompt('Ingrese el precio del producto: '));

        const result = this.productService.createProduct(nameProduct, stockProduct, priceProduct, idProduct);

        if (result.success && result.product) {
            console.log(`Producto registrado exitosamente con ID ${result.product.id}`);
        } else {
            console.log('Error al registrar producto:');
            result.errors?.forEach(err => console.log(` - ${err}`));
        }

        console.table(this.productService.getProducts());
    }

    showProducts(): void {
        console.log('--- Lista de productos ---');
        console.table(this.productService.getProducts());
    }

    createSell(): void {
        const idClient = Number(prompt('Ingrese el id del cliente: '));
        const idProduct = Number(prompt('Ingrese el id del producto: '));
        const quantity = Number(prompt('Ingrese la cantidad a comprar: '));

        const result = this.sellService.createSale(idClient, idProduct, quantity);

        if (result.success && result.sale) {
            console.log('----------------------------');
            console.log('Venta realizada con éxito');
            console.log('----------------------------');
            console.log(`Cliente: ${result.sale.client.name}`);
            console.log(`Producto: ${result.sale.product.name}`);
            console.log(`Cantidad: ${result.sale.quantity}`);
            console.log(`Valor a pagar: $ ${result.sale.total}`);
            console.log(`Cantidad disponible de ${result.sale.product.name} = ${result.sale.product.stock}`);
            console.log('----------------------------');
            console.table(this.sellService.getSales());
        } else {
            switch (result.status) {
                case 'INVALID_INPUT':
                    console.log('Error de validación al procesar la venta:');
                    result.errors?.forEach(err => console.log(` - ${err}`));
                    break;
                case 'CLIENT_NOT_FOUND':
                    console.log(`Error al procesar la venta: Cliente con ID ${idClient} no encontrado`);
                    break;
                case 'PRODUCT_NOT_FOUND':
                    console.log(`Error al procesar la venta: Producto con ID ${idProduct} no encontrado`);
                    break;
                case 'INSUFFICIENT_STOCK':
                    console.log('Error al procesar la venta: Cantidad solicitada excede el stock disponible');
                    break;
                default:
                    console.log('Error al procesar la venta.');
            }
        }
    }
}

export { ConsoleView as View };
