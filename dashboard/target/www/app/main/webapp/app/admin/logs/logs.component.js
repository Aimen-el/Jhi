"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var log_model_1 = require("./log.model");
var logs_service_1 = require("./logs.service");
var LogsComponent = /** @class */ (function () {
    function LogsComponent(logsService) {
        this.logsService = logsService;
        this.filter = '';
        this.orderProp = 'name';
        this.reverse = false;
    }
    LogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logsService.findAll().subscribe(function (response) { return (_this.loggers = response.body); });
    };
    LogsComponent.prototype.changeLevel = function (name, level) {
        var _this = this;
        var log = new log_model_1.Log(name, level);
        this.logsService.changeLevel(log).subscribe(function () {
            _this.logsService.findAll().subscribe(function (response) { return (_this.loggers = response.body); });
        });
    };
    LogsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-logs',
            templateUrl: './logs.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [logs_service_1.LogsService])
    ], LogsComponent);
    return LogsComponent;
}());
exports.LogsComponent = LogsComponent;
//# sourceMappingURL=logs.component.js.map