"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_constants_1 = require("app/app.constants");
var AuthServerProvider = /** @class */ (function () {
    function AuthServerProvider(http) {
        this.http = http;
    }
    AuthServerProvider.prototype.logout = function () {
        // logout from the server
        return this.http.post(app_constants_1.SERVER_API_URL + 'api/logout', {}, { observe: 'response' }).map(function (response) {
            return response;
        });
    };
    AuthServerProvider = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
    ], AuthServerProvider);
    return AuthServerProvider;
    var _a;
}());
exports.AuthServerProvider = AuthServerProvider;
//# sourceMappingURL=auth-session.service.js.map