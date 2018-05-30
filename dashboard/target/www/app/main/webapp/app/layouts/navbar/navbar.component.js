"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_constants_1 = require("app/app.constants");
var core_2 = require("app/core");
var profile_service_1 = require("../profiles/profile.service");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(loginService, principal, profileService, router) {
        this.loginService = loginService;
        this.principal = principal;
        this.profileService = profileService;
        this.router = router;
        this.version = app_constants_1.VERSION ? 'v' + app_constants_1.VERSION : '';
        this.isNavbarCollapsed = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getProfileInfo().then(function (profileInfo) {
            _this.inProduction = profileInfo.inProduction;
            _this.swaggerEnabled = profileInfo.swaggerEnabled;
        });
    };
    NavbarComponent.prototype.collapseNavbar = function () {
        this.isNavbarCollapsed = true;
    };
    NavbarComponent.prototype.isAuthenticated = function () {
        return this.principal.isAuthenticated();
    };
    NavbarComponent.prototype.login = function () {
        this.loginService.login();
    };
    NavbarComponent.prototype.logout = function () {
        this.collapseNavbar();
        this.loginService.logout();
        this.router.navigate(['']);
    };
    NavbarComponent.prototype.toggleNavbar = function () {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    };
    NavbarComponent.prototype.getImageUrl = function () {
        return this.isAuthenticated() ? this.principal.getImageUrl() : null;
    };
    NavbarComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['navbar.css']
        }),
        tslib_1.__metadata("design:paramtypes", [core_2.LoginService,
            core_2.Principal,
            profile_service_1.ProfileService, typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map