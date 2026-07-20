import type { Client } from "../../domain/models/client";
import { Application } from "../../application/Application";
import type { Product } from "../../domain/models/product";
import type { Sell } from "../../domain/models/sell";
import { inMemoryServices } from "../persistence/inMemoryServices";
import { View } from "../../presentation/ui/console/viewConsole";

let productMemory = new inMemoryServices<Product>();
let clientMemory = new inMemoryServices<Client>();
let sellMemory = new inMemoryServices<Sell>();

const view = new View(productMemory, clientMemory, sellMemory);
let app = new Application(view);

export default app;
