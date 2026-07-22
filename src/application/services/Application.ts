import type { IApplication } from '../../domain/interfaces/IApplication';
import type { IView } from '../../domain/interfaces/IView';

export class Application implements IApplication {
    constructor(private _view: IView) {};

    start(): void {
        this._view.initMensaje();
    }
}
