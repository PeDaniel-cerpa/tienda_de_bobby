"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AplicationBuilder = void 0;
var inMemoryServices_1 = require("./inMemoryServices");
var Aplication_1 = require("./Aplication");
var view_1 = require("./view");
var AplicationBuilder = /** @class */ (function () {
    function AplicationBuilder() {
    }
    AplicationBuilder.prototype.terminalView = function () {
        this.app = new Aplication_1.Aplication(new view_1.View(new inMemoryServices_1.inMemoryServices, new inMemoryServices_1.inMemoryServices, new inMemoryServices_1.inMemoryServices));
        return this;
    };
    AplicationBuilder.prototype.build = function () {
        return this.app;
    };
    return AplicationBuilder;
}());
exports.AplicationBuilder = AplicationBuilder;
