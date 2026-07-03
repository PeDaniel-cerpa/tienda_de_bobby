import { inMemoryServices } from "./inMemoryServices";
import { Aplication } from "./Aplication";
import { Client } from "../types/clientModel";
import { Product } from "../types/productModel";
import { Sell } from "../types/sellModel";
import { View } from "./view";
import { ViewWeb } from "./viewWeb";
import { builder } from "../interfaces/aplicationBuilder";
import { inLocalStorageService } from "./inLocalStorageService";

export class AplicationBuilder implements builder {
    private app!: Aplication;

    terminalView() {
        this.app = new Aplication(
            new View(
                new inMemoryServices<Product>(),
                new inMemoryServices<Client>(),
                new inMemoryServices<Sell>(),
            ),
        );

        return this;
    }

    terminalLocalStorageView() {
        this.app = new Aplication(
            new View(
                new inLocalStorageService<Product>('products'),
                new inLocalStorageService<Client>('clients'),
                new inLocalStorageService<Sell>('sells'),
            ),
        );

        return this;
    }

    webView() {
        return this;
    }

    build() {
        return this.app;
    }
}
