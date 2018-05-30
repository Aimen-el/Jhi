"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var datepicker_adapter_1 = require("./util/datepicker-adapter");
var _1 = require("./");
var DashboardSharedModule = /** @class */ (function () {
    function DashboardSharedModule() {
    }
    DashboardSharedModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [_1.DashboardSharedLibsModule, _1.DashboardSharedCommonModule],
            declarations: [_1.HasAnyAuthorityDirective],
            providers: [{ provide: ng_bootstrap_1.NgbDateAdapter, useClass: datepicker_adapter_1.NgbDateMomentAdapter }],
            exports: [_1.DashboardSharedCommonModule, _1.HasAnyAuthorityDirective],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], DashboardSharedModule);
    return DashboardSharedModule;
}());
exports.DashboardSharedModule = DashboardSharedModule;
//# sourceMappingURL=shared.module.js.map