"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_constants_1 = require("app/app.constants");
var GatewayRoutesService = /** @class */ (function () {
    function GatewayRoutesService(http) {
        this.http = http;
    }
    GatewayRoutesService.prototype.findAll = function () {
        return this.http.get(app_constants_1.SERVER_API_URL + 'api/gateway/routes/');
    };
    GatewayRoutesService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
    ], GatewayRoutesService);
    return GatewayRoutesService;
    var _a;
}());
exports.GatewayRoutesService = GatewayRoutesService;
//# sourceMappingURL=gateway-routes.service.js.map