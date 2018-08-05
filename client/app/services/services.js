"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bid_service_1 = require("./bid-service");
var product_service_1 = require("./product-service");
var websocket_service_1 = require("./websocket-service");
exports.ONLINE_AUCTION_SERVICES = [
    bid_service_1.BidService,
    product_service_1.ProductService,
    websocket_service_1.WebSocketService
];
