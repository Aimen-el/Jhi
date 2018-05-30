"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var extra_module_1 = require("./extra/extra.module");
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */
var DashboardEntityModule = /** @class */ (function () {
    function DashboardEntityModule() {
    }
    DashboardEntityModule = tslib_1.__decorate([
        core_1.NgModule({
            // prettier-ignore
            imports: [
                extra_module_1.DashboardExtraModule,
            ],
            declarations: [],
            entryComponents: [],
            providers: [],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], DashboardEntityModule);
    return DashboardEntityModule;
}());
exports.DashboardEntityModule = DashboardEntityModule;
//# sourceMappingURL=entity.module.js.map