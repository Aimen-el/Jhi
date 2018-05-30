"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var _1 = require("./");
var DashboardSharedCommonModule = /** @class */ (function () {
    function DashboardSharedCommonModule() {
    }
    DashboardSharedCommonModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [_1.DashboardSharedLibsModule],
            declarations: [_1.JhiAlertComponent, _1.JhiAlertErrorComponent],
            providers: [],
            exports: [_1.DashboardSharedLibsModule, _1.JhiAlertComponent, _1.JhiAlertErrorComponent]
        })
    ], DashboardSharedCommonModule);
    return DashboardSharedCommonModule;
}());
exports.DashboardSharedCommonModule = DashboardSharedCommonModule;
//# sourceMappingURL=shared-common.module.js.map