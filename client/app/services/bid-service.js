"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var BidService = /** @class */ (function () {
    function BidService(webSocket) {
        this.webSocket = webSocket;
    }
    BidService.prototype.watchProduct = function (productId) {
        var _this = this;
        var openSubscriber = Rx_1.Subscriber.create(function () { return _this.webSocket.send({ productId: productId }); });
        return this.webSocket.createObservableSocket('ws://localhost:8000', openSubscriber)
            .map(function (message) { return JSON.parse(message); });
    };
    BidService = __decorate([
        core_1.Injectable()
    ], BidService);
    return BidService;
}());
exports.BidService = BidService;
