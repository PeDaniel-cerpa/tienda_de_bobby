import type { Sell } from "../models/sell";

export interface ISellRepository {

    create(sell:Sell):boolean;
    show():Sell;
}