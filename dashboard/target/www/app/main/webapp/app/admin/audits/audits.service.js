"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var shared_1 = require("app/shared");
var app_constants_1 = require("app/app.constants");
var AuditsService = /** @class */ (function () {
    function AuditsService(http) {
        this.http = http;
    }
    AuditsService.prototype.query = function (req) {
        var params = shared_1.createRequestOption(req);
        params.set('fromDate', req.fromDate);
        params.set('toDate', req.toDate);
        var requestURL = app_constants_1.SERVER_API_URL + 'management/audits';
        return this.http.get(requestURL, {
            params: params,
            observe: 'response'
        });
    };
    AuditsService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
    ], AuditsService);
    return AuditsService;
    var _a;
}());
exports.AuditsService = AuditsService;
//# sourceMappingURL=audits.service.js.map