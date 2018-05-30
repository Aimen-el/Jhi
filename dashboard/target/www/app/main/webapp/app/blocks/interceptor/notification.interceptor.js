"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ng_jhipster_1 = require("ng-jhipster");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/do");
var NotificationInterceptor = /** @class */ (function () {
    // tslint:disable-next-line: no-unused-variable
    function NotificationInterceptor(injector) {
        var _this = this;
        this.injector = injector;
        setTimeout(function () { return (_this.alertService = injector.get(ng_jhipster_1.JhiAlertService)); });
    }
    NotificationInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).do(function (event) {
            if (event instanceof http_1.HttpResponse) {
                var arr = event.headers.keys();
                var alert_1 = null;
                arr.forEach(function (entry) {
                    if (entry.endsWith('app-alert')) {
                        alert_1 = event.headers.get(entry);
                    }
                });
                if (alert_1) {
                    if (typeof alert_1 === 'string') {
                        if (_this.alertService) {
                            _this.alertService.success(alert_1, null, null);
                        }
                    }
                }
            }
        }, function (err) { });
    };
    return NotificationInterceptor;
}());
exports.NotificationInterceptor = NotificationInterceptor;
//# sourceMappingURL=notification.interceptor.js.map