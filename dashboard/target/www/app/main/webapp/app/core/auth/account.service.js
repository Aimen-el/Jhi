"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_constants_1 = require("app/app.constants");
var AccountService = /** @class */ (function () {
    function AccountService(http) {
        this.http = http;
    }
    AccountService.prototype.get = function () {
        return this.http.get(app_constants_1.SERVER_API_URL + 'api/account', { observe: 'response' });
    };
    AccountService.prototype.save = function (account) {
        return this.http.post(app_constants_1.SERVER_API_URL + 'api/account', account, { observe: 'response' });
    };
    AccountService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
    ], AccountService);
    return AccountService;
    var _a;
}());
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map