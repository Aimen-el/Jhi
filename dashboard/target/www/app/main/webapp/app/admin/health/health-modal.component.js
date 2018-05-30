"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var health_service_1 = require("./health.service");
var JhiHealthModalComponent = /** @class */ (function () {
    function JhiHealthModalComponent(healthService, activeModal) {
        this.healthService = healthService;
        this.activeModal = activeModal;
    }
    JhiHealthModalComponent.prototype.baseName = function (name) {
        return this.healthService.getBaseName(name);
    };
    JhiHealthModalComponent.prototype.subSystemName = function (name) {
        return this.healthService.getSubSystemName(name);
    };
    JhiHealthModalComponent.prototype.readableValue = function (value) {
        if (this.currentHealth.name === 'diskSpace') {
            // Should display storage space in an human readable unit
            var val = value / 1073741824;
            if (val > 1) {
                // Value
                return val.toFixed(2) + ' GB';
            }
            else {
                return (value / 1048576).toFixed(2) + ' MB';
            }
        }
        if (typeof value === 'object') {
            return JSON.stringify(value);
        }
        else {
            return value.toString();
        }
    };
    JhiHealthModalComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-health-modal',
            templateUrl: './health-modal.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [health_service_1.JhiHealthService, typeof (_a = typeof ng_bootstrap_1.NgbActiveModal !== "undefined" && ng_bootstrap_1.NgbActiveModal) === "function" && _a || Object])
    ], JhiHealthModalComponent);
    return JhiHealthModalComponent;
    var _a;
}());
exports.JhiHealthModalComponent = JhiHealthModalComponent;
//# sourceMappingURL=health-modal.component.js.map