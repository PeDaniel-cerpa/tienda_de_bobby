import { Product } from "@/domain/models/product";

export type ProductCreateResult = {
    success: boolean;
    product?: Product;
    errors?: string[];
};