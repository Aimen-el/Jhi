"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ngx_cookie_1 = require("ngx-cookie");
var CSRFService = /** @class */ (function () {
    function CSRFService(cookieService) {
        this.cookieService = cookieService;
    }
    CSRFService.prototype.getCSRF = function (name) {
        name = "" + (name ? name : 'XSRF-TOKEN');
        return this.cookieService.get(name);
    };
    CSRFService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ngx_cookie_1.CookieService !== "undefined" && ngx_cookie_1.CookieService) === "function" && _a || Object])
    ], CSRFService);
    return CSRFService;
    var _a;
}());
exports.CSRFService = CSRFService;
//# sourceMappingURL=csrf.service.js.map