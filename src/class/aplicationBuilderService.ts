import { inMemoryServices } from "./inMemoryServices";
import { Aplication } from "./Aplication";
import type { Client } from "../types/clientModel";
import type { Product } from "../types/productModel";
import type { Sell } from "../types/sellModel";
import { View } from "./view";
import { ViewWeb } from "./viewWeb"; 
import type { builder } from "../interfaces/aplicationBuilder";
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
