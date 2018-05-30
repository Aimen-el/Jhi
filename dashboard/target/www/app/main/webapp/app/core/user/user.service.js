"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_constants_1 = require("app/app.constants");
var request_util_1 = require("app/shared/util/request-util");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.resourceUrl = app_constants_1.SERVER_API_URL + 'api/users';
    }
    UserService.prototype.query = function (req) {
        var options = request_util_1.createRequestOption(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    };
    UserService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
    ], UserService);
    return UserService;
    var _a;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map