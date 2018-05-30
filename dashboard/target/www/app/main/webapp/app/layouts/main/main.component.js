"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var JhiMainComponent = /** @class */ (function () {
    function JhiMainComponent(titleService, router) {
        this.titleService = titleService;
        this.router = router;
    }
    JhiMainComponent.prototype.getPageTitle = function (routeSnapshot) {
        var title = routeSnapshot.data && routeSnapshot.data['pageTitle'] ? routeSnapshot.data['pageTitle'] : 'dashboardApp';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    };
    JhiMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.titleService.setTitle(_this.getPageTitle(_this.router.routerState.snapshot.root));
            }
        });
    };
    JhiMainComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-main',
            templateUrl: './main.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof platform_browser_1.Title !== "undefined" && platform_browser_1.Title) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
    ], JhiMainComponent);
    return JhiMainComponent;
    var _a, _b;
}());
exports.JhiMainComponent = JhiMainComponent;
//# sourceMappingURL=main.component.js.map