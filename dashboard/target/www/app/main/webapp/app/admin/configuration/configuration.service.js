"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_constants_1 = require("app/app.constants");
var JhiConfigurationService = /** @class */ (function () {
    function JhiConfigurationService(http) {
        this.http = http;
    }
    JhiConfigurationService.prototype.get = function () {
        var _this = this;
        return this.http.get(app_constants_1.SERVER_API_URL + 'management/configprops', { observe: 'response' }).map(function (res) {
            var properties = [];
            var propertiesObject = _this.getConfigPropertiesObjects(res.body);
            for (var key in propertiesObject) {
                if (propertiesObject.hasOwnProperty(key)) {
                    properties.push(propertiesObject[key]);
                }
            }
            return properties.sort(function (propertyA, propertyB) {
                return propertyA.prefix === propertyB.prefix ? 0 : propertyA.prefix < propertyB.prefix ? -1 : 1;
            });
        });
    };
    JhiConfigurationService.prototype.getConfigPropertiesObjects = function (res) {
        // This code is for Spring Boot 2
        if (res['contexts'] !== undefined) {
            for (var key in res['contexts']) {
                // If the key is not bootstrap, it will be the ApplicationContext Id
                // For default app, it is baseName
                // For microservice, it is baseName-1
                if (!key.startsWith('bootstrap')) {
                    return res['contexts'][key]['beans'];
                }
            }
        }
        // by default, use the default ApplicationContext Id
        return res['contexts']['dashboard']['beans'];
    };
    JhiConfigurationService.prototype.getEnv = function () {
        return this.http.get(app_constants_1.SERVER_API_URL + 'management/env', { observe: 'response' }).map(function (res) {
            var properties = {};
            var propertySources = res.body['propertySources'];
            for (var _i = 0, propertySources_1 = propertySources; _i < propertySources_1.length; _i++) {
                var propertyObject = propertySources_1[_i];
                var name_1 = propertyObject['name'];
                var detailProperties = propertyObject['properties'];
                var vals = [];
                for (var keyDetail in detailProperties) {
                    if (detailProperties.hasOwnProperty(keyDetail)) {
                        vals.push({ key: keyDetail, val: detailProperties[keyDetail]['value'] });
                    }
                }
                properties[name_1] = vals;
            }
            return properties;
        });
    };
    JhiConfigurationService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
    ], JhiConfigurationService);
    return JhiConfigurationService;
    var _a;
}());
exports.JhiConfigurationService = JhiConfigurationService;
//# sourceMappingURL=configuration.service.js.map