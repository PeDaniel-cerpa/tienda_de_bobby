import { View } from "./view";


export class Aplication {
    constructor(private _view: View) {
    }

    start(): void {
        this._view.initMensaje();
    }
}
