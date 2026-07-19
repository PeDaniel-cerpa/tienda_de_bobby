import type { view } from "../ui/interfaces/view";

export class Application {
    constructor(private _view: view) { }

    start(): void {
        this._view.initMensaje();
    }
}
