"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng_jhipster_1 = require("ng-jhipster");
var core_2 = require("app/core");
var extra_service_1 = require("app/entities/extra/extra.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(extraService, principal, loginService, eventManager) {
        this.extraService = extraService;
        this.principal = principal;
        this.loginService = loginService;
        this.eventManager = eventManager;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAll();
        this.principal.identity().then(function (account) {
            _this.account = account;
        });
        this.registerAuthenticationSuccess();
    };
    HomeComponent.prototype.registerAuthenticationSuccess = function () {
        var _this = this;
        this.eventManager.subscribe('authenticationSuccess', function (message) {
            _this.principal.identity().then(function (account) {
                _this.account = account;
            });
        });
    };
    HomeComponent.prototype.isAuthenticated = function () {
        return this.principal.isAuthenticated();
    };
    HomeComponent.prototype.loadAll = function () {
        var _this = this;
        this.extraService.query().subscribe(function (res) {
            _this.extras = res.body;
        });
    };
    HomeComponent.prototype.login = function () {
        this.loginService.login();
    };
    HomeComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-home',
            templateUrl: './home.component.html',
            styleUrls: ['home.css']
        }),
        tslib_1.__metadata("design:paramtypes", [extra_service_1.ExtraService,
            core_2.Principal,
            core_2.LoginService, typeof (_a = typeof ng_jhipster_1.JhiEventManager !== "undefined" && ng_jhipster_1.JhiEventManager) === "function" && _a || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map