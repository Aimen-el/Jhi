"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable max-line-length */
var testing_1 = require("@angular/core/testing");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var Observable_1 = require("rxjs/Observable");
var ng_jhipster_1 = require("ng-jhipster");
var test_module_1 = require("../../../../test.module");
var extra_delete_dialog_component_1 = require("app/entities/consultant/extra/extra-delete-dialog.component");
var extra_service_1 = require("app/entities/consultant/extra/extra.service");
describe('Component Tests', function () {
    describe('Extra Management Delete Component', function () {
        var comp;
        var fixture;
        var service;
        var mockEventManager;
        var mockActiveModal;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.DashboardTestModule],
                declarations: [extra_delete_dialog_component_1.ExtraDeleteDialogComponent],
                providers: [extra_service_1.ExtraService]
            })
                .overrideTemplate(extra_delete_dialog_component_1.ExtraDeleteDialogComponent, '')
                .compileComponents();
            fixture = testing_1.TestBed.createComponent(extra_delete_dialog_component_1.ExtraDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(extra_service_1.ExtraService);
            mockEventManager = fixture.debugElement.injector.get(ng_jhipster_1.JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(ng_bootstrap_1.NgbActiveModal);
        });
        describe('confirmDelete', function () {
            it('Should call delete service on confirmDelete', testing_1.inject([], testing_1.fakeAsync(function () {
                // GIVEN
                spyOn(service, 'delete').and.returnValue(Observable_1.Observable.of({}));
                // WHEN
                comp.confirmDelete(123);
                testing_1.tick();
                // THEN
                expect(service.delete).toHaveBeenCalledWith(123);
                expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
            })));
        });
    });
});
//# sourceMappingURL=extra-delete-dialog.component.spec.js.map