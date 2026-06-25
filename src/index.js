"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aplicationBuilderService_1 = require("./class/aplicationBuilderService");
var app = new aplicationBuilderService_1.AplicationBuilder().terminalView().build();
app.start();
exports.default = app;
