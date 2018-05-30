"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/do");
var login_service_1 = require("app/core/login/login.service");
var AuthExpiredInterceptor = /** @class */ (function () {
    function AuthExpiredInterceptor(stateStorageService, injector) {
        this.stateStorageService = stateStorageService;
        this.injector = injector;
    }
    AuthExpiredInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).do(function (event) { }, function (err) {
            if (err instanceof http_1.HttpErrorResponse) {
                if (err.status === 401 && err.url && !err.url.includes('/api/account')) {
                    var destination = _this.stateStorageService.getDestinationState();
                    if (destination !== null) {
                        var to = destination.destination;
                        var toParams = destination.params;
                        if (to.name === 'accessdenied') {
                            _this.stateStorageService.storePreviousState(to.name, toParams);
                        }
                    }
                    else {
                        _this.stateStorageService.storeUrl('/');
                    }
                    var loginService = _this.injector.get(login_service_1.LoginService);
                    loginService.login();
                }
            }
        });
    };
    return AuthExpiredInterceptor;
}());
exports.AuthExpiredInterceptor = AuthExpiredInterceptor;
//# sourceMappingURL=auth-expired.interceptor.js.map