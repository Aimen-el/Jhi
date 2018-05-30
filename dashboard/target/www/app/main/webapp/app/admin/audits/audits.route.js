"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng_jhipster_1 = require("ng-jhipster");
var audits_component_1 = require("./audits.component");
var AuditResolvePagingParams = /** @class */ (function () {
    function AuditResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    AuditResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'auditEventDate,desc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    AuditResolvePagingParams = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ng_jhipster_1.JhiPaginationUtil !== "undefined" && ng_jhipster_1.JhiPaginationUtil) === "function" && _a || Object])
    ], AuditResolvePagingParams);
    return AuditResolvePagingParams;
    var _a;
}());
exports.AuditResolvePagingParams = AuditResolvePagingParams;
exports.auditsRoute = {
    path: 'audits',
    component: audits_component_1.AuditsComponent,
    resolve: {
        pagingParams: AuditResolvePagingParams
    },
    data: {
        pageTitle: 'Audits'
    }
};
//# sourceMappingURL=audits.route.js.map