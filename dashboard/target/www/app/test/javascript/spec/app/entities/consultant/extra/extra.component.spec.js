"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable max-line-length */
var testing_1 = require("@angular/core/testing");
var Observable_1 = require("rxjs/Observable");
var http_1 = require("@angular/common/http");
var test_module_1 = require("../../../../test.module");
var extra_component_1 = require("app/entities/consultant/extra/extra.component");
var extra_service_1 = require("app/entities/consultant/extra/extra.service");
var extra_model_1 = require("app/shared/model/consultant/extra.model");
describe('Component Tests', function () {
    describe('Extra Management Component', function () {
        var comp;
        var fixture;
        var service;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.DashboardTestModule],
                declarations: [extra_component_1.ExtraComponent],
                providers: [extra_service_1.ExtraService]
            })
                .overrideTemplate(extra_component_1.ExtraComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(extra_component_1.ExtraComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(extra_service_1.ExtraService);
        });
        it('Should call load all on init', function () {
            // GIVEN
            var headers = new http_1.HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(Observable_1.Observable.of(new http_1.HttpResponse({
                body: [new extra_model_1.Extra(123)],
                headers: headers
            })));
            // WHEN
            comp.ngOnInit();
            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.extras[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
//# sourceMappingURL=extra.component.spec.js.map