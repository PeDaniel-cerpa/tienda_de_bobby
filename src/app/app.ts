import type { Client } from "undici-types";
import { Application } from "../class/Application";
import { inMemoryServices } from "../class/inMemoryServices";
import { View } from "../ui/console/viewConsole";
import type { Product } from "../types/productModel";
import type { Sell } from "../types/sellModel";

let productMemory =  new inMemoryServices<Product>();
let clientMemory =  new inMemoryServices<Client>();
let sellMemory =  new inMemoryServices<Sell>();

const view = new View(productMemory,clientMemory,sellMemory);
let app = new Application(view);

export default app;
