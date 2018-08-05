"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var WebSocketService = /** @class */ (function () {
    function WebSocketService() {
    }
    WebSocketService.prototype.createObservableSocket = function (url, openSubscriber) {
        var _this = this;
        this.ws = new WebSocket(url);
        return new Observable_1.Observable(function (observer) {
            _this.ws.onmessage = function (event) { return observer.next(event.data); };
            _this.ws.onerror = function (event) { return observer.error(event); };
            _this.ws.onclose = function (event) { return observer.complete(); };
            _this.ws.onopen = function (event) {
                openSubscriber.next();
                openSubscriber.complete();
            };
            return function () { return _this.ws.close(); };
        });
    };
    WebSocketService.prototype.send = function (message) {
        this.ws.send(JSON.stringify(message));
    };
    WebSocketService = __decorate([
        core_1.Injectable()
    ], WebSocketService);
    return WebSocketService;
}());
exports.WebSocketService = WebSocketService;
