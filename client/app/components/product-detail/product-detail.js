"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_service_1 = require("../../services/product-service");
var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(route, productService, bidService) {
        var _this = this;
        this.bidService = bidService;
        this.isReviewHidden = true;
        this.isWatching = false;
        var productId = parseInt(route.snapshot.params['productId']);
        productService
            .getProductById(productId)
            .subscribe(function (product) {
            _this.product = product;
            _this.currentBid = product.price;
        }, function (error) { return console.error(error); });
        productService
            .getReviewsForProduct(productId)
            .subscribe(function (reviews) { return _this.reviews = reviews; }, function (error) { return console.error(error); });
    }
    ProductDetailComponent.prototype.toggleWatchProduct = function () {
        var _this = this;
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
            this.isWatching = false;
        }
        else {
            this.isWatching = true;
            this.subscription = this.bidService.watchProduct(this.product.id)
                .subscribe(function (products) { return _this.currentBid = products.find(function (p) { return p.productId === _this.product.id; }).bid; }, function (error) { return console.log(error); });
        }
    };
    /* add a router guard to unsubscribe on deactivate*/
    ProductDetailComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    ProductDetailComponent.prototype.addReview = function () {
        var review = new product_service_1.Review(0, this.product.id, new Date(), 'Anonymous', this.newRating, this.product.image, this.newComment);
        console.log("Adding review " + JSON.stringify(review));
        this.reviews = this.reviews.concat([review]);
        this.product.rating = this.averageRating(this.reviews);
        this.resetForm();
    };
    ProductDetailComponent.prototype.averageRating = function (reviews) {
        var sum = reviews.reduce(function (average, review) { return average + review.rating; }, 0);
        return sum / reviews.length;
    };
    ProductDetailComponent.prototype.resetForm = function () {
        this.newRating = 0;
        this.newComment = null;
        this.isReviewHidden = true;
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: 'auction-product-page',
            styles: ['auction-stars.large {font-size: 24px;}'],
            templateUrl: 'app/components/product-detail/product-detail.html',
        })
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.default = ProductDetailComponent;
