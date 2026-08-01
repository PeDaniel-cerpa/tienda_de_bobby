import { ProcessSaleStatus } from "@/application/services-results/sale/processSaleStatus";
import { Sale } from "@/domain/models/sale";

export type ProcessSaleResult = {
    success: boolean;
    status: ProcessSaleStatus;
    sale?: Sale;
    errors?: string[];
};