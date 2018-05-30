"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var testing_1 = require("@angular/common/http/testing");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng_jhipster_1 = require("ng-jhipster");
var core_2 = require("app/core");
var mock_principal_service_1 = require("./helpers/mock-principal.service");
var mock_account_service_1 = require("./helpers/mock-account.service");
var mock_route_service_1 = require("./helpers/mock-route.service");
var mock_active_modal_service_1 = require("./helpers/mock-active-modal.service");
var mock_event_manager_service_1 = require("./helpers/mock-event-manager.service");
var DashboardTestModule = /** @class */ (function () {
    function DashboardTestModule() {
    }
    DashboardTestModule = tslib_1.__decorate([
        core_1.NgModule({
            providers: [
                common_1.DatePipe,
                ng_jhipster_1.JhiDataUtils,
                ng_jhipster_1.JhiDateUtils,
                ng_jhipster_1.JhiParseLinks,
                {
                    provide: ng_jhipster_1.JhiEventManager,
                    useClass: mock_event_manager_service_1.MockEventManager
                },
                {
                    provide: ng_bootstrap_1.NgbActiveModal,
                    useClass: mock_active_modal_service_1.MockActiveModal
                },
                {
                    provide: router_1.ActivatedRoute,
                    useValue: new mock_route_service_1.MockActivatedRoute({ id: 123 })
                },
                {
                    provide: router_1.Router,
                    useClass: mock_route_service_1.MockRouter
                },
                {
                    provide: core_2.Principal,
                    useClass: mock_principal_service_1.MockPrincipal
                },
                {
                    provide: core_2.AccountService,
                    useClass: mock_account_service_1.MockAccountService
                },
                {
                    provide: core_1.ElementRef,
                    useValue: null
                },
                {
                    provide: core_1.Renderer,
                    useValue: null
                },
                {
                    provide: ng_jhipster_1.JhiAlertService,
                    useValue: null
                },
                {
                    provide: ng_bootstrap_1.NgbModal,
                    useValue: null
                }
            ],
            imports: [testing_1.HttpClientTestingModule]
        })
    ], DashboardTestModule);
    return DashboardTestModule;
}());
exports.DashboardTestModule = DashboardTestModule;
//# sourceMappingURL=test.module.js.map