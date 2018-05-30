"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var core_1 = require("app/core");
var ADMIN_ROUTES = [_1.auditsRoute, _1.configurationRoute, _1.docsRoute, _1.healthRoute, _1.logsRoute, _1.gatewayRoute, _1.metricsRoute];
exports.adminState = [
    {
        path: '',
        data: {
            authorities: ['ROLE_ADMIN']
        },
        canActivate: [core_1.UserRouteAccessService],
        children: ADMIN_ROUTES
    }
];
//# sourceMappingURL=admin.route.js.map