import type { CRUD } from "./CRUD";

export interface CRUDF extends CRUD {
    findById(id: number): number;
}
