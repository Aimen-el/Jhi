"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var metrics_modal_component_1 = require("./metrics-modal.component");
var metrics_service_1 = require("./metrics.service");
var JhiMetricsMonitoringComponent = /** @class */ (function () {
    function JhiMetricsMonitoringComponent(modalService, metricsService) {
        this.modalService = modalService;
        this.metricsService = metricsService;
        this.metrics = {};
        this.cachesStats = {};
        this.servicesStats = {};
        this.updatingMetrics = true;
        this.JCACHE_KEY = 'jcache.statistics';
    }
    JhiMetricsMonitoringComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    JhiMetricsMonitoringComponent.prototype.refresh = function () {
        var _this = this;
        this.updatingMetrics = true;
        this.metricsService.getMetrics().subscribe(function (metrics) {
            _this.metrics = metrics;
            _this.updatingMetrics = false;
            _this.servicesStats = {};
            _this.cachesStats = {};
            Object.keys(metrics.timers).forEach(function (key) {
                var value = metrics.timers[key];
                if (key.includes('web.rest') || key.includes('service')) {
                    _this.servicesStats[key] = value;
                }
            });
            Object.keys(metrics.gauges).forEach(function (key) {
                if (key.includes('jcache.statistics')) {
                    var value = metrics.gauges[key].value;
                    // remove gets or puts
                    var index = key.lastIndexOf('.');
                    var newKey = key.substr(0, index);
                    // Keep the name of the domain
                    _this.cachesStats[newKey] = {
                        name: _this.JCACHE_KEY.length,
                        value: value
                    };
                }
            });
        });
    };
    JhiMetricsMonitoringComponent.prototype.refreshThreadDumpData = function () {
        var _this = this;
        this.metricsService.threadDump().subscribe(function (data) {
            var modalRef = _this.modalService.open(metrics_modal_component_1.JhiMetricsMonitoringModalComponent, { size: 'lg' });
            modalRef.componentInstance.threadDump = data.threads;
            modalRef.result.then(function (result) {
                // Left blank intentionally, nothing to do here
            }, function (reason) {
                // Left blank intentionally, nothing to do here
            });
        });
    };
    JhiMetricsMonitoringComponent.prototype.filterNaN = function (input) {
        if (isNaN(input)) {
            return 0;
        }
        return input;
    };
    JhiMetricsMonitoringComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-metrics',
            templateUrl: './metrics.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ng_bootstrap_1.NgbModal !== "undefined" && ng_bootstrap_1.NgbModal) === "function" && _a || Object, metrics_service_1.JhiMetricsService])
    ], JhiMetricsMonitoringComponent);
    return JhiMetricsMonitoringComponent;
    var _a;
}());
exports.JhiMetricsMonitoringComponent = JhiMetricsMonitoringComponent;
//# sourceMappingURL=metrics.component.js.map