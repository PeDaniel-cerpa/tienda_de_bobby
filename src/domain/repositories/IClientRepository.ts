import type { Client } from "../models/client";

export interface IClientRepository {

    create(client: Client): boolean;
    show(): Client;
}