import { inMemoryServices } from "./inMemoryServices";
import { Aplication } from "./Aplication";
import { Client } from "../types/clientModel";
import { Product } from "../types/productModel";
import { Sell } from "../types/sellModel";
import { View } from "./view";
import { builder } from "../interfaces/aplicationBuilder";

export class AplicationBuilder implements builder {
    private app!:Aplication;

    terminalView() {
        this.app = new Aplication(

            new View(
                new inMemoryServices<Product>,
                new inMemoryServices<Client>,
                new inMemoryServices<Sell>
            )
        );

        return this;
    }

    build() {
        return this.app;
    }
}