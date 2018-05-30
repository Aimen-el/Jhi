"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_1 = require("app/shared");
var _1 = require("./");
var DashboardHomeModule = /** @class */ (function () {
    function DashboardHomeModule() {
    }
    DashboardHomeModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [shared_1.DashboardSharedModule, router_1.RouterModule.forChild([_1.HOME_ROUTE])],
            declarations: [_1.HomeComponent],
            entryComponents: [],
            providers: [],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], DashboardHomeModule);
    return DashboardHomeModule;
}());
exports.DashboardHomeModule = DashboardHomeModule;
//# sourceMappingURL=home.module.js.map