import type { Sell } from "./sell";

export type ProcessSaleResult = {
    success: boolean;
    message: string;
    sale?: Sell;
}