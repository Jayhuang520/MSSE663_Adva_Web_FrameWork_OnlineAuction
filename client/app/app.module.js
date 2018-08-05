"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var application_1 = require("./components/application/application");
var carousel_1 = require("./components/carousel/carousel");
var footer_1 = require("./components/footer/footer");
var navbar_1 = require("./components/navbar/navbar");
var product_item_1 = require("./components/product-item/product-item");
var search_1 = require("./components/search/search");
var stars_1 = require("./components/stars/stars");
var product_service_1 = require("./services/product-service");
var services_1 = require("./services/services");
var home_1 = require("./components/home/home");
var product_detail_1 = require("./components/product-detail/product-detail");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, forms_1.FormsModule, http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: home_1.default },
                    { path: 'products/:productId', component: product_detail_1.default }
                ])],
            declarations: [application_1.default,
                carousel_1.default,
                footer_1.default,
                navbar_1.default,
                home_1.default,
                product_detail_1.default,
                product_item_1.default,
                search_1.default,
                stars_1.default],
            providers: [product_service_1.ProductService, services_1.ONLINE_AUCTION_SERVICES,
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
            bootstrap: [application_1.default]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
