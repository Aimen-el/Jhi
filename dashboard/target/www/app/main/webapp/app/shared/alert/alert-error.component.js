"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ng_jhipster_1 = require("ng-jhipster");
var JhiAlertErrorComponent = /** @class */ (function () {
    /* tslint:disable */
    function JhiAlertErrorComponent(alertService, eventManager) {
        var _this = this;
        this.alertService = alertService;
        this.eventManager = eventManager;
        /* tslint:enable */
        this.alerts = [];
        this.cleanHttpErrorListener = eventManager.subscribe('dashboardApp.httpError', function (response) {
            var i;
            var httpErrorResponse = response.content;
            switch (httpErrorResponse.status) {
                // connection refused, server not reachable
                case 0:
                    _this.addErrorAlert('Server not reachable', 'error.server.not.reachable');
                    break;
                case 400:
                    var arr = httpErrorResponse.headers.keys();
                    var errorHeader_1 = null;
                    var entityKey_1 = null;
                    arr.forEach(function (entry) {
                        if (entry.endsWith('app-error')) {
                            errorHeader_1 = httpErrorResponse.headers.get(entry);
                        }
                        else if (entry.endsWith('app-params')) {
                            entityKey_1 = httpErrorResponse.headers.get(entry);
                        }
                    });
                    if (errorHeader_1) {
                        var entityName = entityKey_1;
                        _this.addErrorAlert(errorHeader_1, errorHeader_1, { entityName: entityName });
                    }
                    else if (httpErrorResponse.error !== '' && httpErrorResponse.error.fieldErrors) {
                        var fieldErrors = httpErrorResponse.error.fieldErrors;
                        for (i = 0; i < fieldErrors.length; i++) {
                            var fieldError = fieldErrors[i];
                            // convert 'something[14].other[4].id' to 'something[].other[].id' so translations can be written to it
                            var convertedField = fieldError.field.replace(/\[\d*\]/g, '[]');
                            var fieldName = convertedField.charAt(0).toUpperCase() + convertedField.slice(1);
                            _this.addErrorAlert('Error on field "' + fieldName + '"', 'error.' + fieldError.message, { fieldName: fieldName });
                        }
                    }
                    else if (httpErrorResponse.error !== '' && httpErrorResponse.error.message) {
                        _this.addErrorAlert(httpErrorResponse.error.message, httpErrorResponse.error.message, httpErrorResponse.error.params);
                    }
                    else {
                        _this.addErrorAlert(httpErrorResponse.error);
                    }
                    break;
                case 404:
                    _this.addErrorAlert('Not found', 'error.url.not.found');
                    break;
                default:
                    if (httpErrorResponse.error !== '' && httpErrorResponse.error.message) {
                        _this.addErrorAlert(httpErrorResponse.error.message);
                    }
                    else {
                        _this.addErrorAlert(httpErrorResponse.error);
                    }
            }
        });
    }
    JhiAlertErrorComponent.prototype.ngOnDestroy = function () {
        if (this.cleanHttpErrorListener !== undefined && this.cleanHttpErrorListener !== null) {
            this.eventManager.destroy(this.cleanHttpErrorListener);
            this.alerts = [];
        }
    };
    JhiAlertErrorComponent.prototype.addErrorAlert = function (message, key, data) {
        this.alerts.push(this.alertService.addAlert({
            type: 'danger',
            msg: message,
            timeout: 5000,
            toast: this.alertService.isToast(),
            scoped: true
        }, this.alerts));
    };
    JhiAlertErrorComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-alert-error',
            template: "\n        <div class=\"alerts\" role=\"alert\">\n            <div *ngFor=\"let alert of alerts\"  [ngClass]=\"{'alert.position': true, 'toast': alert.toast}\">\n                <ngb-alert *ngIf=\"alert && alert.type && alert.msg\" [type]=\"alert.type\" (close)=\"alert.close(alerts)\">\n                    <pre [innerHTML]=\"alert.msg\"></pre>\n                </ngb-alert>\n            </div>\n        </div>"
        }),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof ng_jhipster_1.JhiAlertService !== "undefined" && ng_jhipster_1.JhiAlertService) === "function" && _a || Object, typeof (_b = typeof ng_jhipster_1.JhiEventManager !== "undefined" && ng_jhipster_1.JhiEventManager) === "function" && _b || Object])
    ], JhiAlertErrorComponent);
    return JhiAlertErrorComponent;
    var _a, _b;
}());
exports.JhiAlertErrorComponent = JhiAlertErrorComponent;
//# sourceMappingURL=alert-error.component.js.map