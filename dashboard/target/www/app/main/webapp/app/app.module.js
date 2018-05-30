"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require("./vendor.ts");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var ngx_webstorage_1 = require("ngx-webstorage");
var ng_jhipster_1 = require("ng-jhipster");
var auth_expired_interceptor_1 = require("./blocks/interceptor/auth-expired.interceptor");
var errorhandler_interceptor_1 = require("./blocks/interceptor/errorhandler.interceptor");
var notification_interceptor_1 = require("./blocks/interceptor/notification.interceptor");
var shared_1 = require("app/shared");
var core_2 = require("app/core");
var app_routing_module_1 = require("./app-routing.module");
var home_module_1 = require("./home/home.module");
var entity_module_1 = require("./entities/entity.module");
var uib_pagination_config_1 = require("./blocks/config/uib-pagination.config");
var state_storage_service_1 = require("app/core/auth/state-storage.service");
// jhipster-needle-angular-add-module-import JHipster will add new module here
var layouts_1 = require("./layouts");
var DashboardAppModule = /** @class */ (function () {
    function DashboardAppModule() {
    }
    DashboardAppModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.DashboardAppRoutingModule,
                ngx_webstorage_1.Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
                shared_1.DashboardSharedModule,
                core_2.DashboardCoreModule,
                home_module_1.DashboardHomeModule,
                entity_module_1.DashboardEntityModule
                // jhipster-needle-angular-add-module JHipster will add new module here
            ],
            declarations: [layouts_1.JhiMainComponent, layouts_1.NavbarComponent, layouts_1.ErrorComponent, layouts_1.PageRibbonComponent, layouts_1.FooterComponent],
            providers: [
                layouts_1.ProfileService,
                uib_pagination_config_1.PaginationConfig,
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: auth_expired_interceptor_1.AuthExpiredInterceptor,
                    multi: true,
                    deps: [state_storage_service_1.StateStorageService, core_1.Injector]
                },
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: errorhandler_interceptor_1.ErrorHandlerInterceptor,
                    multi: true,
                    deps: [ng_jhipster_1.JhiEventManager]
                },
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: notification_interceptor_1.NotificationInterceptor,
                    multi: true,
                    deps: [core_1.Injector]
                }
            ],
            bootstrap: [layouts_1.JhiMainComponent]
        })
    ], DashboardAppModule);
    return DashboardAppModule;
}());
exports.DashboardAppModule = DashboardAppModule;
//# sourceMappingURL=app.module.js.map