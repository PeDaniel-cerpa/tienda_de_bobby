import type { CRUD } from "./CRUD";

export interface CRUDF<T> extends CRUD<T> {
    findById(id: number): T | undefined;
}
