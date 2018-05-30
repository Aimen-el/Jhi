"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var principal_service_1 = require("../auth/principal.service");
var auth_session_service_1 = require("../auth/auth-session.service");
var LoginService = /** @class */ (function () {
    function LoginService(principal, authServerProvider) {
        this.principal = principal;
        this.authServerProvider = authServerProvider;
    }
    LoginService.prototype.login = function () {
        var port = location.port ? ':' + location.port : '';
        if (port === ':9000') {
            port = ':8080';
        }
        location.href = '//' + location.hostname + port + '/login';
    };
    LoginService.prototype.logout = function () {
        this.authServerProvider.logout().subscribe();
        this.principal.authenticate(null);
    };
    LoginService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [principal_service_1.Principal, auth_session_service_1.AuthServerProvider])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map