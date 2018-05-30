"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ngx_webstorage_1 = require("ngx-webstorage");
var StateStorageService = /** @class */ (function () {
    function StateStorageService($sessionStorage) {
        this.$sessionStorage = $sessionStorage;
    }
    StateStorageService.prototype.getPreviousState = function () {
        return this.$sessionStorage.retrieve('previousState');
    };
    StateStorageService.prototype.resetPreviousState = function () {
        this.$sessionStorage.clear('previousState');
    };
    StateStorageService.prototype.storePreviousState = function (previousStateName, previousStateParams) {
        var previousState = { name: previousStateName, params: previousStateParams };
        this.$sessionStorage.store('previousState', previousState);
    };
    StateStorageService.prototype.getDestinationState = function () {
        return this.$sessionStorage.retrieve('destinationState');
    };
    StateStorageService.prototype.storeUrl = function (url) {
        this.$sessionStorage.store('previousUrl', url);
    };
    StateStorageService.prototype.getUrl = function () {
        return this.$sessionStorage.retrieve('previousUrl');
    };
    StateStorageService.prototype.storeDestinationState = function (destinationState, destinationStateParams, fromState) {
        var destinationInfo = {
            destination: {
                name: destinationState.name,
                data: destinationState.data
            },
            params: destinationStateParams,
            from: {
                name: fromState.name
            }
        };
        this.$sessionStorage.store('destinationState', destinationInfo);
    };
    StateStorageService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ngx_webstorage_1.SessionStorageService !== "undefined" && ngx_webstorage_1.SessionStorageService) === "function" && _a || Object])
    ], StateStorageService);
    return StateStorageService;
    var _a;
}());
exports.StateStorageService = StateStorageService;
//# sourceMappingURL=state-storage.service.js.map