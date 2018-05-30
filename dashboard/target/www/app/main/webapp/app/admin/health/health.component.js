"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var health_service_1 = require("./health.service");
var health_modal_component_1 = require("./health-modal.component");
var JhiHealthCheckComponent = /** @class */ (function () {
    function JhiHealthCheckComponent(modalService, healthService) {
        this.modalService = modalService;
        this.healthService = healthService;
    }
    JhiHealthCheckComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    JhiHealthCheckComponent.prototype.baseName = function (name) {
        return this.healthService.getBaseName(name);
    };
    JhiHealthCheckComponent.prototype.getBadgeClass = function (statusState) {
        if (statusState === 'UP') {
            return 'badge-success';
        }
        else {
            return 'badge-danger';
        }
    };
    JhiHealthCheckComponent.prototype.refresh = function () {
        var _this = this;
        this.updatingHealth = true;
        this.healthService.checkHealth().subscribe(function (health) {
            _this.healthData = _this.healthService.transformHealthData(health);
            _this.updatingHealth = false;
        }, function (error) {
            if (error.status === 503) {
                _this.healthData = _this.healthService.transformHealthData(error.error);
                _this.updatingHealth = false;
            }
        });
    };
    JhiHealthCheckComponent.prototype.showHealth = function (health) {
        var modalRef = this.modalService.open(health_modal_component_1.JhiHealthModalComponent);
        modalRef.componentInstance.currentHealth = health;
        modalRef.result.then(function (result) {
            // Left blank intentionally, nothing to do here
        }, function (reason) {
            // Left blank intentionally, nothing to do here
        });
    };
    JhiHealthCheckComponent.prototype.subSystemName = function (name) {
        return this.healthService.getSubSystemName(name);
    };
    JhiHealthCheckComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-health',
            templateUrl: './health.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ng_bootstrap_1.NgbModal !== "undefined" && ng_bootstrap_1.NgbModal) === "function" && _a || Object, health_service_1.JhiHealthService])
    ], JhiHealthCheckComponent);
    return JhiHealthCheckComponent;
    var _a;
}());
exports.JhiHealthCheckComponent = JhiHealthCheckComponent;
//# sourceMappingURL=health.component.js.map