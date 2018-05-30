"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng_jhipster_1 = require("ng-jhipster");
var core_2 = require("app/core");
var extra_service_1 = require("./extra.service");
var ExtraComponent = /** @class */ (function () {
    function ExtraComponent(extraService, jhiAlertService, eventManager, principal) {
        this.extraService = extraService;
        this.jhiAlertService = jhiAlertService;
        this.eventManager = eventManager;
        this.principal = principal;
    }
    ExtraComponent.prototype.loadAll = function () {
        var _this = this;
        this.extraService.query().subscribe(function (res) {
            _this.extras = res.body;
        }, function (res) { return _this.onError(res.message); });
    };
    ExtraComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAll();
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.registerChangeInExtras();
    };
    ExtraComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    ExtraComponent.prototype.trackId = function (index, item) {
        return item.id;
    };
    ExtraComponent.prototype.registerChangeInExtras = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('extraListModification', function (response) { return _this.loadAll(); });
    };
    ExtraComponent.prototype.onError = function (errorMessage) {
        this.jhiAlertService.error(errorMessage, null, null);
    };
    ExtraComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-extra',
            templateUrl: './extra.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [extra_service_1.ExtraService, typeof (_a = typeof ng_jhipster_1.JhiAlertService !== "undefined" && ng_jhipster_1.JhiAlertService) === "function" && _a || Object, typeof (_b = typeof ng_jhipster_1.JhiEventManager !== "undefined" && ng_jhipster_1.JhiEventManager) === "function" && _b || Object, core_2.Principal])
    ], ExtraComponent);
    return ExtraComponent;
    var _a, _b;
}());
exports.ExtraComponent = ExtraComponent;
//# sourceMappingURL=extra.component.js.map