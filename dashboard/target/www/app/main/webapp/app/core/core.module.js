"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var platform_browser_1 = require("@angular/platform-browser");
var en_1 = require("@angular/common/locales/en");
var _1 = require("./");
var DashboardCoreModule = /** @class */ (function () {
    function DashboardCoreModule() {
        common_1.registerLocaleData(en_1.default);
    }
    DashboardCoreModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [http_1.HttpClientModule],
            exports: [],
            declarations: [],
            providers: [
                _1.LoginService,
                platform_browser_1.Title,
                {
                    provide: core_1.LOCALE_ID,
                    useValue: 'en'
                },
                _1.AccountService,
                _1.StateStorageService,
                _1.Principal,
                _1.CSRFService,
                _1.AuthServerProvider,
                _1.UserService,
                common_1.DatePipe,
                _1.UserRouteAccessService
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DashboardCoreModule);
    return DashboardCoreModule;
}());
exports.DashboardCoreModule = DashboardCoreModule;
//# sourceMappingURL=core.module.js.map