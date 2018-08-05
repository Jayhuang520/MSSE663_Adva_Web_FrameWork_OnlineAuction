"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var Product = /** @class */ (function () {
    function Product(id, title, price, rating, description, image, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.description = description;
        this.image = image;
        this.categories = categories;
    }
    return Product;
}());
exports.Product = Product;
var Review = /** @class */ (function () {
    function Review(id, productId, timestamp, user, rating, image, comment) {
        this.id = id;
        this.productId = productId;
        this.timestamp = timestamp;
        this.user = user;
        this.rating = rating;
        this.image = image;
        this.comment = comment;
    }
    return Review;
}());
exports.Review = Review;
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.searchEvent = new core_1.EventEmitter();
    }
    ProductService.prototype.search = function (params) {
        return this.http
            .get('/products', { search: encodeParams(params) })
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.getProducts = function () {
        return this.http.get('/products')
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.getProductById = function (productId) {
        return this.http.get("/products/" + productId)
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.getReviewsForProduct = function (productId) {
        return this.http
            .get("/products/" + productId + "/reviews")
            .map(function (response) { return response.json(); })
            .map(function (reviews) { return reviews.map(function (r) { return new Review(r.id, r.productId, new Date(r.timestamp), r.user, r.rating, r.image, r.comment); }); });
    };
    ProductService.prototype.getAllCategories = function () {
        return ['Computer', 'Video Games'];
    };
    ProductService = __decorate([
        core_1.Injectable()
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
/**
 * Encodes the object into a valid query string.
 */
function encodeParams(params) {
    return Object.keys(params)
        .filter(function (key) { return params[key]; })
        .reduce(function (accum, key) {
        accum.append(key, params[key]);
        return accum;
    }, new http_1.URLSearchParams());
}
