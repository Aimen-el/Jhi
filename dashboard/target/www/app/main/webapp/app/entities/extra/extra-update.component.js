"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng_jhipster_1 = require("ng-jhipster");
var extra_service_1 = require("./extra.service");
var core_2 = require("app/core");
var ExtraUpdateComponent = /** @class */ (function () {
    function ExtraUpdateComponent(jhiAlertService, extraService, userService, route) {
        this.jhiAlertService = jhiAlertService;
        this.extraService = extraService;
        this.userService = userService;
        this.route = route;
    }
    ExtraUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSaving = false;
        this.route.data.subscribe(function (_a) {
            var extra = _a.extra;
            _this.extra = extra.body ? extra.body : extra;
        });
        this.userService.query().subscribe(function (res) {
            _this.users = res.body;
        }, function (res) { return _this.onError(res.message); });
    };
    ExtraUpdateComponent.prototype.previousState = function () {
        window.history.back();
    };
    ExtraUpdateComponent.prototype.save = function () {
        this.isSaving = true;
        if (this.extra.id !== undefined) {
            this.subscribeToSaveResponse(this.extraService.update(this.extra));
        }
        else {
            this.subscribeToSaveResponse(this.extraService.create(this.extra));
        }
    };
    ExtraUpdateComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onSaveSuccess(); }, function (res) { return _this.onSaveError(); });
    };
    ExtraUpdateComponent.prototype.onSaveSuccess = function () {
        this.isSaving = false;
        this.previousState();
    };
    ExtraUpdateComponent.prototype.onSaveError = function () {
        this.isSaving = false;
    };
    ExtraUpdateComponent.prototype.onError = function (errorMessage) {
        this.jhiAlertService.error(errorMessage, null, null);
    };
    ExtraUpdateComponent.prototype.trackUserById = function (index, item) {
        return item.id;
    };
    Object.defineProperty(ExtraUpdateComponent.prototype, "extra", {
        get: function () {
            return this._extra;
        },
        set: function (extra) {
            this._extra = extra;
        },
        enumerable: true,
        configurable: true
    });
    ExtraUpdateComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-extra-update',
            templateUrl: './extra-update.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ng_jhipster_1.JhiAlertService !== "undefined" && ng_jhipster_1.JhiAlertService) === "function" && _a || Object, extra_service_1.ExtraService,
            core_2.UserService, typeof (_b = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _b || Object])
    ], ExtraUpdateComponent);
    return ExtraUpdateComponent;
    var _a, _b;
}());
exports.ExtraUpdateComponent = ExtraUpdateComponent;
//# sourceMappingURL=extra-update.component.js.map