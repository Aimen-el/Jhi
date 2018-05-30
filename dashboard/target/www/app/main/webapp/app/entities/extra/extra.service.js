"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var moment = require("moment");
var app_constants_1 = require("app/app.constants");
var shared_1 = require("app/shared");
var ExtraService = /** @class */ (function () {
    function ExtraService(http) {
        this.http = http;
        this.resourceUrl = app_constants_1.SERVER_API_URL + 'api/extras';
    }
    ExtraService.prototype.create = function (extra) {
        var _this = this;
        var copy = this.convertDateFromClient(extra);
        return this.http
            .post(this.resourceUrl, copy, { observe: 'response' })
            .map(function (res) { return _this.convertDateFromServer(res); });
    };
    ExtraService.prototype.update = function (extra) {
        var _this = this;
        var copy = this.convertDateFromClient(extra);
        return this.http
            .put(this.resourceUrl, copy, { observe: 'response' })
            .map(function (res) { return _this.convertDateFromServer(res); });
    };
    ExtraService.prototype.find = function (id) {
        var _this = this;
        return this.http
            .get(this.resourceUrl + "/" + id, { observe: 'response' })
            .map(function (res) { return _this.convertDateFromServer(res); });
    };
    ExtraService.prototype.query = function (req) {
        var _this = this;
        var options = shared_1.createRequestOption(req);
        return this.http
            .get(this.resourceUrl, { params: options, observe: 'response' })
            .map(function (res) { return _this.convertDateArrayFromServer(res); });
    };
    ExtraService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id, { observe: 'response' });
    };
    ExtraService.prototype.convertDateFromClient = function (extra) {
        var copy = Object.assign({}, extra, {
            dateEntree: extra.dateEntree != null && extra.dateEntree.isValid() ? extra.dateEntree.toJSON() : null
        });
        return copy;
    };
    ExtraService.prototype.convertDateFromServer = function (res) {
        res.body.dateEntree = res.body.dateEntree != null ? moment(res.body.dateEntree) : null;
        return res;
    };
    ExtraService.prototype.convertDateArrayFromServer = function (res) {
        res.body.forEach(function (extra) {
            extra.dateEntree = extra.dateEntree != null ? moment(extra.dateEntree) : null;
        });
        return res;
    };
    ExtraService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
    ], ExtraService);
    return ExtraService;
    var _a;
}());
exports.ExtraService = ExtraService;
//# sourceMappingURL=extra.service.js.map