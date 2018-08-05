"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SearchComponent = /** @class */ (function () {
    function SearchComponent(productService) {
        this.productService = productService;
        this.categories = this.productService.getAllCategories();
        var fb = new forms_1.FormBuilder();
        this.formModel = fb.group({
            'title': [null, forms_1.Validators.minLength(3)],
            'price': [null, positiveNumberValidator],
            'category': ['']
        });
    }
    SearchComponent.prototype.onSearch = function () {
        if (this.formModel.valid) {
            this.productService.searchEvent.emit(this.formModel.value);
        }
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'auction-search',
            templateUrl: 'app/components/search/search.html'
        })
    ], SearchComponent);
    return SearchComponent;
}());
exports.default = SearchComponent;
function positiveNumberValidator(control) {
    if (!control.value)
        return null;
    var price = parseInt(control.value);
    return price === null ||
        typeof price === 'number' &&
            price > 0 ? null : { positivenumber: true };
}
