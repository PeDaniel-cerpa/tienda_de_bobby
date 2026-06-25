"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aplication = void 0;
var Aplication = /** @class */ (function () {
    function Aplication(_view) {
        this._view = _view;
    }
    Aplication.prototype.start = function () {
        this._view.initMensaje();
    };
    return Aplication;
}());
exports.Aplication = Aplication;
