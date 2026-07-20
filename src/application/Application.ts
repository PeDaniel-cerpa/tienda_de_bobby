import type { view } from "../presentation/ui/shared/interfaces/view";

export class Application {
    constructor(private _view: view) { }

    start(): void {
        this._view.initMensaje();
    }
}
