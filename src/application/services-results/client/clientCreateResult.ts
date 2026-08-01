import { Client } from "@/domain/models/client";

export type ClientCreateResult = {
    success: boolean;
    client?: Client;
    errors?: string[];
};