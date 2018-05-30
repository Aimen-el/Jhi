"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(route) {
        this.route = route;
    }
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (routeData) {
            if (routeData.error403) {
                _this.error403 = routeData.error403;
            }
            if (routeData.errorMessage) {
                _this.errorMessage = routeData.errorMessage;
            }
        });
    };
    ErrorComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-error',
            templateUrl: './error.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object])
    ], ErrorComponent);
    return ErrorComponent;
    var _a;
}());
exports.ErrorComponent = ErrorComponent;
//# sourceMappingURL=error.component.js.map