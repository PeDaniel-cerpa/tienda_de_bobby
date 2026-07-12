import type { view } from "../interfaces/view";

export class Application {
    constructor(private _view: view) { }

    start(): void {
        this._view.initMensaje();
    }
}
