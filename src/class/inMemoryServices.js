"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inMemoryServices = void 0;
var inMemoryServices = /** @class */ (function () {
    function inMemoryServices() {
        this.inMemoryDataBase = [];
    }
    inMemoryServices.prototype.create = function (payload) {
        return this.inMemoryDataBase.push(payload) > 0;
    };
    inMemoryServices.prototype.read = function () {
        return this.inMemoryDataBase;
    };
    inMemoryServices.prototype.update = function (id, data) {
        var status = true;
        var indexResult = this.inMemoryDataBase.findIndex(function (_a) {
            var key = _a[0], value = _a[1];
            return id === value;
        });
        if (indexResult === -1) {
            status = false;
        }
        else {
            this.inMemoryDataBase[indexResult] = data;
        }
        ;
        return status;
    };
    inMemoryServices.prototype.delete = function (id) {
        var status = true;
        var indexResult = this.inMemoryDataBase.findIndex(function (_a) {
            var key = _a[0], value = _a[1];
            return id === value;
        });
        if (indexResult === -1)
            status = false;
        this.inMemoryDataBase.splice(indexResult, 1);
        return status;
    };
    inMemoryServices.prototype.findById = function (id) {
        var indexResult = this.inMemoryDataBase.findIndex(function (value) { return value.id === id; });
        return indexResult;
    };
    return inMemoryServices;
}());
exports.inMemoryServices = inMemoryServices;
