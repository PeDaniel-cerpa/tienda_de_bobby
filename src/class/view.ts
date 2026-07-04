"../../services/inMemoryServices";

import { inMemoryServiceClient } from "../interfaces/inMemoryServiceClient";
import { inMemoryServicesProduct } from "../interfaces/inMemoryServicesProduct";
import { inMemoryServicesSell } from "../interfaces/inMemoryServicesSell";
import { Client } from "../types/clientModel";
import { Product } from "../types/productModel";
import { Sell } from "../types/sellModel";
import { inMemoryServices } from "./inMemoryServices";
import dotenv from "dotenv";

const envUse = `.env.${process.env.NODE_ENV || "local"}`;
dotenv.config({ path: envUse });

var scanf = require("scanf");

export class View {
    constructor(
        private inMemoryServiceProducts: inMemoryServicesProduct,
        private inMemoryServiceClient: inMemoryServiceClient,
        private inMemoryServiceSell: inMemoryServicesSell,
    ) { }

    initMensaje(): void {
        console.log("-----------------------------------------------");
        console.log();
        console.log("--- LA TIENDA DE BOOBY, AHORA SIN PROMESAS!!! ---");
        console.log();
        console.log(`Conectado al puerto: ${process.env.PORT}`);
        console.log(`Entorno: ${process.env.NODE_ENV}`);
        console.log("-----------------------------------------------");
        this.buildMenuApp();
    }

    buildMenuApp(): void {
        console.log("----------------------------");
        console.log();
        console.log("1. Registrar cliente");
        console.log();
        console.log("2. Ver Clientes");
        console.log();
        console.log("3. Registrar producto");
        console.log();
        console.log("4. crear venta");
        console.log();
        console.log("5. ver productos");
        console.log();
        console.log("6. Salir");
        console.log("----------------------------");

        const selectedOption = scanf("%s");
        this.processOptionSelected(selectedOption);
    }

    processOptionSelected(option: string): void {
        switch (option) {
            case "1":
                this.createClient();
                this.buildMenuApp();
                break;

            case "2":
                console.log("--- Lista de clientes ---");
                console.table(this.inMemoryServiceClient.read<Client>());
                this.buildMenuApp();
                break;

            case "3":
                this.createProduct();
                this.buildMenuApp();
                break;

            case "4":
                this.createSell();
                this.buildMenuApp();
                break;

            case "5":
                console.table(this.inMemoryServiceProducts.read<Product>());
                this.buildMenuApp();
                break;

            case "6":
            break;
        }
    }

    createClient(): void {
        console.log("Ingresa el id del cliente");
        let idClient: number = scanf("%d");

        console.log("Ingresa el nombre del cliente");
        let nameClient: string = scanf("%s");
        let dataClient: Client = {
            id: idClient,
            name: nameClient,
        };

        if (this.inMemoryServiceClient.create<Client>(dataClient))
            console.log("cliente registrado exitosamente");

        console.table(this.inMemoryServiceClient.read<Client>());
    }

    createProduct(): void {
        console.log("Ingresa el id del producto");
        let idProdcut = scanf("%d");
        console.log("Ingresa el nombre del producto");
        let nameProdcut = scanf("%s");
        console.log("Ingresa la cantidad del producto");
        let stockProdcut = scanf("%d");
        console.log("Ingresa el precio del producto");
        let priceProdcut = scanf("%d");

        let dataProduct: Product = {
            id: idProdcut,
            name: nameProdcut,
            stock: stockProdcut,
            price: priceProdcut,
        };

        if (this.inMemoryServiceProducts.create<Product>(dataProduct))
            console.log("Producto registrado exitosamente");

        console.table(this.inMemoryServiceProducts.read());
    }

    valideId(id: number, data: inMemoryServices<Client>) {
        const tempBase = data.read<Client>();
        const index = data.findById(id);

        if (id === -1) {
            console.log("Cliente no encontrado");
            return;
        }

        return tempBase[index];
    }

    printSell(tempClient: Client, tempProduct: Product, stockSellProduct: any) {
        console.table(this.inMemoryServiceSell.read());
        console.log("");
        console.log("-------------------------------------");
        console.log(`Nombre del cliente: ${tempClient.name}`);
        console.log(`Id del cliente: ${tempClient.id}`);
        console.log(`Producto: ${tempProduct.name} cantidad: ${stockSellProduct}`);
        console.log(`Valor a pagar $  : ${tempProduct.price * stockSellProduct}`);
        console.log("");
        console.log("-------------------------------------");
    }

    valideStock(tempProduct: Product, stockSellProduct: any):boolean {
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
        console.log("ingrese el id del cliente");
        let idClient = scanf("%d");

        const temBaseClient = this.inMemoryServiceClient.read<Client>();
        const indexClient = this.inMemoryServiceClient.findById(idClient);

        if (indexClient === -1) {
            console.log("Cliente no encontrado");
            return;
        }
        const tempClient = temBaseClient[indexClient];
        console.log(`Cliente encontrado ${tempClient.name}`);

        console.log("ingrese el id del producto a vender");
        let idProduct = scanf("%d");

        const tempBaseProduct = this.inMemoryServiceProducts.read<Product>();
        const indexProduct = this.inMemoryServiceProducts.findById(idProduct);

        if (indexProduct === -1) {
            console.log("producto no encontrado");
            return;
        }

        const tempProduct = tempBaseProduct[indexProduct];
        console.log(`producto encontrado ${tempProduct.name}`);
        console.log("Ingrese la cantidad a comprar");
        let stockSellProduct = scanf("%d");

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
