"../../services/inMemoryServices";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
var scanf = require("scanf");
var View = /** @class */ (function () {
    function View(inMemoryServiceProducts, inMemoryServiceClient, inMemoryServiceSell) {
        this.inMemoryServiceProducts = inMemoryServiceProducts;
        this.inMemoryServiceClient = inMemoryServiceClient;
        this.inMemoryServiceSell = inMemoryServiceSell;
    }
    View.prototype.initMensaje = function () {
        console.log("-----------------------------------------------");
        console.log();
        console.log("--- LA TIENDA DE BOOBY, AHORA SIN PROMESAS!!! ---");
        console.log();
        console.log("-----------------------------------------------");
        this.buildMenuApp();
    };
    View.prototype.buildMenuApp = function () {
        console.log("----------------------------");
        console.log();
        console.log("1. Registrar cliente");
        console.log();
        console.log("2. Ver Clientes");
        console.log();
        console.log("3. Registrar producto");
        console.log();
        console.log("4. crear venta");
        console.log();
        console.log("5. ver productos");
        console.log();
        console.log("6. Salir");
        console.log("----------------------------");
        var selectedOption = scanf("%s");
        this.processOptionSelected(selectedOption);
    };
    View.prototype.processOptionSelected = function (option) {
        switch (option) {
            case "1":
                this.createClient();
                this.buildMenuApp();
                break;
            case "2":
                console.log("--- Lista de clientes ---");
                console.table(this.inMemoryServiceClient.read());
                this.buildMenuApp();
                break;
            case "3":
                this.createProduct();
                this.buildMenuApp();
                break;
            case "4":
                this.createSell();
                this.buildMenuApp();
                break;
            case "5":
                console.table(this.inMemoryServiceProducts.read());
                this.buildMenuApp();
                break;
            case "6":
                break;
        }
    };
    View.prototype.createClient = function () {
        console.log("Ingresa el id del cliente");
        var idClient = scanf("%d");
        console.log("Ingresa el nombre del cliente");
        var nameClient = scanf("%s");
        var dataClient = {
            id: idClient,
            name: nameClient,
        };
        if (this.inMemoryServiceClient.create(dataClient))
            console.log("cliente registrado exitosamente");
        console.table(this.inMemoryServiceClient.read());
    };
    View.prototype.createProduct = function () {
        console.log("Ingresa el id del producto");
        var idProdcut = scanf("%d");
        console.log("Ingresa el nombre del producto");
        var nameProdcut = scanf("%s");
        console.log("Ingresa la cantidad del producto");
        var stockProdcut = scanf("%d");
        console.log("Ingresa el precio del producto");
        var priceProdcut = scanf("%d");
        var dataProduct = {
            id: idProdcut,
            name: nameProdcut,
            stock: stockProdcut,
            price: priceProdcut,
        };
        if (this.inMemoryServiceProducts.create(dataProduct))
            console.log("Producto registrado exitosamente");
        console.table(this.inMemoryServiceProducts.read());
    };
    View.prototype.valideId = function (id, data) {
        var tempBase = data.read();
        var index = data.findById(id);
        if (id === -1) {
            console.log("Cliente no encontrado");
            return;
        }
        return tempBase[index];
    };
    View.prototype.printSell = function (tempClient, tempProduct, stockSellProduct) {
        console.table(this.inMemoryServiceSell.read());
        console.log("");
        console.log("-------------------------------------");
        console.log("Nombre del cliente: ".concat(tempClient.name));
        console.log("Id del cliente: ".concat(tempClient.id));
        console.log("Producto: ".concat(tempProduct.name, " cantidad: ").concat(stockSellProduct));
        console.log("Valor a pagar $  : ".concat(tempProduct.price * stockSellProduct));
        console.log("");
        console.log("-------------------------------------");
    };
    View.prototype.valideStock = function (tempProduct, stockSellProduct) {
        if (tempProduct.stock < stockSellProduct) {
            console.log("Cantidad del producto no dispponible, stock actual ".concat(tempProduct.stock));
            return;
        }
        else {
            tempProduct.stock -= stockSellProduct;
            console.log("venta exitosa, cantidad disponible de ".concat(tempProduct.name, " = ").concat(tempProduct.stock));
        }
    };
    View.prototype.createSell = function () {
        console.log("ingrese el id del cliente");
        var idClient = scanf("%d");
        var temBaseClient = this.inMemoryServiceClient.read();
        var indexClient = this.inMemoryServiceClient.findById(idClient);
        if (idClient === -1) {
            console.log("Cliente no encontrado");
            return;
        }
        var tempClient = temBaseClient[indexClient];
        console.log("Cliente encontrado ".concat(tempClient.name));
        //this.valideId(idClient>);
        console.log("ingrese el id del prodcuto");
        var idProduct = scanf("%d");
        var tempBaseProduct = this.inMemoryServiceProducts.read();
        var indexProduct = this.inMemoryServiceProducts.findById(idProduct);
        if (indexProduct === -1) {
            console.log("producto no encontrado");
            return;
        }
        var tempProduct = tempBaseProduct[indexProduct];
        console.log("producto encontrado ".concat(tempProduct.name));
        console.log("Ingrese la cantidad a comprar");
        var stockSellProduct = scanf("%d");
        this.valideStock(tempProduct, stockSellProduct);
        var tempSell = {
            idClient: tempClient,
            idProduct: tempProduct,
        };
        this.inMemoryServiceSell.create(tempSell);
        this.printSell(tempClient, tempProduct, stockSellProduct);
    };
    return View;
}());
exports.View = View;
