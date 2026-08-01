import type { Sale } from "@/domain/models/sale.js";
import type { ProcessSaleResult } from "@/application/services-results/sale/processSaleResult.js";

export interface ISellService {
    createSale(clientId: number, productId: number, quantity: number): ProcessSaleResult;
    getSales(): Sale[];
}
