"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var gateway_routes_service_1 = require("./gateway-routes.service");
var JhiGatewayComponent = /** @class */ (function () {
    function JhiGatewayComponent(gatewayRoutesService) {
        this.gatewayRoutesService = gatewayRoutesService;
    }
    JhiGatewayComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    JhiGatewayComponent.prototype.refresh = function () {
        var _this = this;
        this.updatingRoutes = true;
        this.gatewayRoutesService.findAll().subscribe(function (gatewayRoutes) {
            _this.gatewayRoutes = gatewayRoutes;
            _this.updatingRoutes = false;
        });
    };
    JhiGatewayComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-gateway',
            templateUrl: './gateway.component.html',
            providers: [gateway_routes_service_1.GatewayRoutesService]
        }),
        tslib_1.__metadata("design:paramtypes", [gateway_routes_service_1.GatewayRoutesService])
    ], JhiGatewayComponent);
    return JhiGatewayComponent;
}());
exports.JhiGatewayComponent = JhiGatewayComponent;
//# sourceMappingURL=gateway.component.js.map