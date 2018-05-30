"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var ng_jhipster_1 = require("ng-jhipster");
var shared_1 = require("app/shared");
var audits_service_1 = require("./audits.service");
var AuditsComponent = /** @class */ (function () {
    function AuditsComponent(auditsService, alertService, parseLinks, activatedRoute, datePipe, router) {
        var _this = this;
        this.auditsService = auditsService;
        this.alertService = alertService;
        this.parseLinks = parseLinks;
        this.activatedRoute = activatedRoute;
        this.datePipe = datePipe;
        this.router = router;
        this.itemsPerPage = shared_1.ITEMS_PER_PAGE;
        this.routeData = this.activatedRoute.data.subscribe(function (data) {
            _this.page = data['pagingParams'].page;
            _this.previousPage = data['pagingParams'].page;
            _this.reverse = data['pagingParams'].ascending;
            _this.predicate = data['pagingParams'].predicate;
        });
    }
    AuditsComponent.prototype.ngOnInit = function () {
        this.today();
        this.previousMonth();
        this.loadAll();
    };
    AuditsComponent.prototype.ngOnDestroy = function () {
        this.routeData.unsubscribe();
    };
    AuditsComponent.prototype.previousMonth = function () {
        var dateFormat = 'yyyy-MM-dd';
        var fromDate = new Date();
        if (fromDate.getMonth() === 0) {
            fromDate = new Date(fromDate.getFullYear() - 1, 11, fromDate.getDate());
        }
        else {
            fromDate = new Date(fromDate.getFullYear(), fromDate.getMonth() - 1, fromDate.getDate());
        }
        this.fromDate = this.datePipe.transform(fromDate, dateFormat);
    };
    AuditsComponent.prototype.today = function () {
        var dateFormat = 'yyyy-MM-dd';
        // Today + 1 day - needed if the current day must be included
        var today = new Date();
        today.setDate(today.getDate() + 1);
        var date = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        this.toDate = this.datePipe.transform(date, dateFormat);
    };
    AuditsComponent.prototype.loadAll = function () {
        var _this = this;
        this.auditsService
            .query({
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort(),
            fromDate: this.fromDate,
            toDate: this.toDate
        })
            .subscribe(function (res) { return _this.onSuccess(res.body, res.headers); }, function (res) { return _this.onError(res.body); });
    };
    AuditsComponent.prototype.sort = function () {
        var result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    };
    AuditsComponent.prototype.loadPage = function (page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.transition();
        }
    };
    AuditsComponent.prototype.transition = function () {
        this.router.navigate(['/audits'], {
            queryParams: {
                page: this.page,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }
        });
        this.loadAll();
    };
    AuditsComponent.prototype.onSuccess = function (data, headers) {
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = headers.get('X-Total-Count');
        this.queryCount = this.totalItems;
        this.audits = data;
    };
    AuditsComponent.prototype.onError = function (error) {
        this.alertService.error(error.error, error.message, null);
    };
    AuditsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-audit',
            templateUrl: './audits.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [audits_service_1.AuditsService, typeof (_a = typeof ng_jhipster_1.JhiAlertService !== "undefined" && ng_jhipster_1.JhiAlertService) === "function" && _a || Object, typeof (_b = typeof ng_jhipster_1.JhiParseLinks !== "undefined" && ng_jhipster_1.JhiParseLinks) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object, typeof (_d = typeof common_1.DatePipe !== "undefined" && common_1.DatePipe) === "function" && _d || Object, typeof (_e = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _e || Object])
    ], AuditsComponent);
    return AuditsComponent;
    var _a, _b, _c, _d, _e;
}());
exports.AuditsComponent = AuditsComponent;
//# sourceMappingURL=audits.component.js.map