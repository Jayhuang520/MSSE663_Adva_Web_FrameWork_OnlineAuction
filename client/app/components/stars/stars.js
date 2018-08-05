"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StarsComponent = /** @class */ (function () {
    function StarsComponent() {
        this.maxStars = 5;
        this.readonly = true;
        this.ratingChange = new core_1.EventEmitter();
    }
    Object.defineProperty(StarsComponent.prototype, "rating", {
        get: function () {
            return this._rating;
        },
        set: function (value) {
            this._rating = value || 0;
            this.stars = Array(this.maxStars).fill(true, 0, this.rating);
        },
        enumerable: true,
        configurable: true
    });
    StarsComponent.prototype.fillStarsWithColor = function (index) {
        if (!this.readonly) {
            this.rating = index + 1;
            this.ratingChange.emit(this.rating);
        }
    };
    __decorate([
        core_1.Input()
    ], StarsComponent.prototype, "readonly", void 0);
    __decorate([
        core_1.Input()
    ], StarsComponent.prototype, "rating", null);
    __decorate([
        core_1.Output()
    ], StarsComponent.prototype, "ratingChange", void 0);
    StarsComponent = __decorate([
        core_1.Component({
            selector: 'auction-stars',
            styles: [".starrating { color: #ffd700; }"],
            templateUrl: 'app/components/stars/stars.html'
        })
    ], StarsComponent);
    return StarsComponent;
}());
exports.default = StarsComponent;
