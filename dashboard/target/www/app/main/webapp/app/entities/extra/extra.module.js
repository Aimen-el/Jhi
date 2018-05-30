"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_1 = require("app/shared");
var admin_module_1 = require("app/admin/admin.module");
var _1 = require("./");
var ENTITY_STATES = _1.extraRoute.concat(_1.extraPopupRoute);
var DashboardExtraModule = /** @class */ (function () {
    function DashboardExtraModule() {
    }
    DashboardExtraModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [shared_1.DashboardSharedModule, admin_module_1.DashboardAdminModule, router_1.RouterModule.forChild(ENTITY_STATES)],
            declarations: [_1.ExtraComponent, _1.ExtraDetailComponent, _1.ExtraUpdateComponent, _1.ExtraDeleteDialogComponent, _1.ExtraDeletePopupComponent],
            entryComponents: [_1.ExtraComponent, _1.ExtraUpdateComponent, _1.ExtraDeleteDialogComponent, _1.ExtraDeletePopupComponent],
            providers: [_1.ExtraService, _1.ExtraResolve],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], DashboardExtraModule);
    return DashboardExtraModule;
}());
exports.DashboardExtraModule = DashboardExtraModule;
//# sourceMappingURL=extra.module.js.map