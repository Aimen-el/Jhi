"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_1 = require("app/shared");
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */
var _1 = require("./");
var DashboardAdminModule = /** @class */ (function () {
    function DashboardAdminModule() {
    }
    DashboardAdminModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                shared_1.DashboardSharedModule,
                router_1.RouterModule.forChild(_1.adminState)
                /* jhipster-needle-add-admin-module - JHipster will add admin modules here */
            ],
            declarations: [
                _1.AuditsComponent,
                _1.LogsComponent,
                _1.JhiConfigurationComponent,
                _1.JhiHealthCheckComponent,
                _1.JhiHealthModalComponent,
                _1.JhiDocsComponent,
                _1.JhiGatewayComponent,
                _1.JhiMetricsMonitoringComponent,
                _1.JhiMetricsMonitoringModalComponent
            ],
            entryComponents: [_1.JhiHealthModalComponent, _1.JhiMetricsMonitoringModalComponent],
            providers: [
                _1.AuditResolvePagingParams,
                _1.AuditsService,
                _1.JhiConfigurationService,
                _1.JhiHealthService,
                _1.JhiMetricsService,
                _1.GatewayRoutesService,
                _1.LogsService
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], DashboardAdminModule);
    return DashboardAdminModule;
}());
exports.DashboardAdminModule = DashboardAdminModule;
//# sourceMappingURL=admin.module.js.map