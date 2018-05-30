"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var shared_1 = require("app/shared");
var PaginationConfig = /** @class */ (function () {
    // tslint:disable-next-line: no-unused-variable
    function PaginationConfig(config) {
        this.config = config;
        config.boundaryLinks = true;
        config.maxSize = 5;
        config.pageSize = shared_1.ITEMS_PER_PAGE;
        config.size = 'sm';
    }
    PaginationConfig = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ng_bootstrap_1.NgbPaginationConfig !== "undefined" && ng_bootstrap_1.NgbPaginationConfig) === "function" && _a || Object])
    ], PaginationConfig);
    return PaginationConfig;
    var _a;
}());
exports.PaginationConfig = PaginationConfig;
//# sourceMappingURL=uib-pagination.config.js.map