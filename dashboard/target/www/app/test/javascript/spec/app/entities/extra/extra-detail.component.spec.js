"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable max-line-length */
var testing_1 = require("@angular/core/testing");
var router_1 = require("@angular/router");
var of_1 = require("rxjs/observable/of");
var test_module_1 = require("../../../test.module");
var extra_detail_component_1 = require("app/entities/extra/extra-detail.component");
var extra_model_1 = require("app/shared/model/extra.model");
describe('Component Tests', function () {
    describe('Extra Management Detail Component', function () {
        var comp;
        var fixture;
        var route = { data: of_1.of({ extra: new extra_model_1.Extra(123) }) };
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.DashboardTestModule],
                declarations: [extra_detail_component_1.ExtraDetailComponent],
                providers: [{ provide: router_1.ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(extra_detail_component_1.ExtraDetailComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(extra_detail_component_1.ExtraDetailComponent);
            comp = fixture.componentInstance;
        });
        describe('OnInit', function () {
            it('Should call load all on init', function () {
                // GIVEN
                // WHEN
                comp.ngOnInit();
                // THEN
                expect(comp.extra).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
//# sourceMappingURL=extra-detail.component.spec.js.map