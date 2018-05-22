/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { DashboardTestModule } from '../../../../test.module';
import { ExtraComponent } from 'app/entities/consultant/extra/extra.component';
import { ExtraService } from 'app/entities/consultant/extra/extra.service';
import { Extra } from 'app/shared/model/consultant/extra.model';

describe('Component Tests', () => {
    describe('Extra Management Component', () => {
        let comp: ExtraComponent;
        let fixture: ComponentFixture<ExtraComponent>;
        let service: ExtraService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [DashboardTestModule],
                declarations: [ExtraComponent],
                providers: [ExtraService]
            })
                .overrideTemplate(ExtraComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(ExtraComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ExtraService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                Observable.of(
                    new HttpResponse({
                        body: [new Extra(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.extras[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
