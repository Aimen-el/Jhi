"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("./configuration.service");
var JhiConfigurationComponent = /** @class */ (function () {
    function JhiConfigurationComponent(configurationService) {
        this.configurationService = configurationService;
        this.allConfiguration = null;
        this.configuration = null;
        this.configKeys = [];
        this.filter = '';
        this.orderProp = 'prefix';
        this.reverse = false;
    }
    JhiConfigurationComponent.prototype.keys = function (dict) {
        return dict === undefined ? [] : Object.keys(dict);
    };
    JhiConfigurationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configurationService.get().subscribe(function (configuration) {
            _this.configuration = configuration;
            for (var _i = 0, configuration_1 = configuration; _i < configuration_1.length; _i++) {
                var config = configuration_1[_i];
                if (config.properties !== undefined) {
                    _this.configKeys.push(Object.keys(config.properties));
                }
            }
        });
        this.configurationService.getEnv().subscribe(function (configuration) {
            _this.allConfiguration = configuration;
        });
    };
    JhiConfigurationComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-configuration',
            templateUrl: './configuration.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.JhiConfigurationService])
    ], JhiConfigurationComponent);
    return JhiConfigurationComponent;
}());
exports.JhiConfigurationComponent = JhiConfigurationComponent;
//# sourceMappingURL=configuration.component.js.map