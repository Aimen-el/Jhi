"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var core_2 = require("app/core");
var extra_model_1 = require("../../shared/model/extra.model");
var extra_service_1 = require("./extra.service");
var extra_component_1 = require("./extra.component");
var extra_detail_component_1 = require("./extra-detail.component");
var extra_update_component_1 = require("./extra-update.component");
var extra_delete_dialog_component_1 = require("./extra-delete-dialog.component");
var ExtraResolve = /** @class */ (function () {
    function ExtraResolve(service) {
        this.service = service;
    }
    ExtraResolve.prototype.resolve = function (route, state) {
        var id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id);
        }
        return new extra_model_1.Extra();
    };
    ExtraResolve = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [extra_service_1.ExtraService])
    ], ExtraResolve);
    return ExtraResolve;
}());
exports.ExtraResolve = ExtraResolve;
exports.extraRoute = [
    {
        path: 'extra',
        component: extra_component_1.ExtraComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Extras'
        },
        canActivate: [core_2.UserRouteAccessService]
    },
    {
        path: 'extra/:id/view',
        component: extra_detail_component_1.ExtraDetailComponent,
        resolve: {
            extra: ExtraResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Extras'
        },
        canActivate: [core_2.UserRouteAccessService]
    },
    {
        path: 'extra/new',
        component: extra_update_component_1.ExtraUpdateComponent,
        resolve: {
            extra: ExtraResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Extras'
        },
        canActivate: [core_2.UserRouteAccessService]
    },
    {
        path: 'extra/:id/edit',
        component: extra_update_component_1.ExtraUpdateComponent,
        resolve: {
            extra: ExtraResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Extras'
        },
        canActivate: [core_2.UserRouteAccessService]
    }
];
exports.extraPopupRoute = [
    {
        path: 'extra/:id/delete',
        component: extra_delete_dialog_component_1.ExtraDeletePopupComponent,
        resolve: {
            extra: ExtraResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Extras'
        },
        canActivate: [core_2.UserRouteAccessService],
        outlet: 'popup'
    }
];
//# sourceMappingURL=extra.route.js.map