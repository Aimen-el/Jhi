"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ExtraDetailComponent = /** @class */ (function () {
    function ExtraDetailComponent(route) {
        this.route = route;
    }
    ExtraDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (_a) {
            var extra = _a.extra;
            _this.extra = extra.body ? extra.body : extra;
        });
    };
    ExtraDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    ExtraDetailComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-extra-detail',
            templateUrl: './extra-detail.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object])
    ], ExtraDetailComponent);
    return ExtraDetailComponent;
    var _a;
}());
exports.ExtraDetailComponent = ExtraDetailComponent;
//# sourceMappingURL=extra-detail.component.js.map