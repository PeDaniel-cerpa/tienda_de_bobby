import type { Client } from "undici-types";
import { Application } from "./Application";
import { inMemoryServices } from "../infrastructure/persistence/inMemoryServices";
import { View } from "../ui/console/viewConsole";
import type { Product } from "../domain/entities/product";
import type { Sell } from "../domain/entities/sell";

let productMemory = new inMemoryServices<Product>();
let clientMemory = new inMemoryServices<Client>();
let sellMemory = new inMemoryServices<Sell>();

const view = new View(productMemory, clientMemory, sellMemory);
let app = new Application(view);

export default app;
