"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/do");
var ErrorHandlerInterceptor = /** @class */ (function () {
    function ErrorHandlerInterceptor(eventManager) {
        this.eventManager = eventManager;
    }
    ErrorHandlerInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).do(function (event) { }, function (err) {
            if (err instanceof http_1.HttpErrorResponse) {
                if (!(err.status === 401 && (err.message === '' || (err.url && err.url.indexOf('/api/account') === 0)))) {
                    if (_this.eventManager !== undefined) {
                        _this.eventManager.broadcast({ name: 'dashboardApp.httpError', content: err });
                    }
                }
            }
        });
    };
    return ErrorHandlerInterceptor;
}());
exports.ErrorHandlerInterceptor = ErrorHandlerInterceptor;
//# sourceMappingURL=errorhandler.interceptor.js.map