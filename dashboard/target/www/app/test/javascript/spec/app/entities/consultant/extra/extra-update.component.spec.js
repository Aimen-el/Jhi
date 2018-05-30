"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable max-line-length */
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/common/http");
var Observable_1 = require("rxjs/Observable");
var test_module_1 = require("../../../../test.module");
var extra_update_component_1 = require("app/entities/consultant/extra/extra-update.component");
var extra_service_1 = require("app/entities/consultant/extra/extra.service");
var extra_model_1 = require("app/shared/model/consultant/extra.model");
describe('Component Tests', function () {
    describe('Extra Management Update Component', function () {
        var comp;
        var fixture;
        var service;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.DashboardTestModule],
                declarations: [extra_update_component_1.ExtraUpdateComponent],
                providers: [extra_service_1.ExtraService]
            })
                .overrideTemplate(extra_update_component_1.ExtraUpdateComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(extra_update_component_1.ExtraUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(extra_service_1.ExtraService);
        });
        describe('save', function () {
            it('Should call update service on save for existing entity', testing_1.fakeAsync(function () {
                // GIVEN
                var entity = new extra_model_1.Extra(123);
                spyOn(service, 'update').and.returnValue(Observable_1.Observable.of(new http_1.HttpResponse({ body: entity })));
                comp.extra = entity;
                // WHEN
                comp.save();
                testing_1.tick(); // simulate async
                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));
            it('Should call create service on save for new entity', testing_1.fakeAsync(function () {
                // GIVEN
                var entity = new extra_model_1.Extra();
                spyOn(service, 'create').and.returnValue(Observable_1.Observable.of(new http_1.HttpResponse({ body: entity })));
                comp.extra = entity;
                // WHEN
                comp.save();
                testing_1.tick(); // simulate async
                // THEN
                expect(service.create).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));
        });
    });
});
//# sourceMappingURL=extra-update.component.spec.js.map