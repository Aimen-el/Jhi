/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs/observable/of';

import { DashboardTestModule } from '../../../../test.module';
import { ExtraDetailComponent } from 'app/entities/consultant/extra/extra-detail.component';
import { Extra } from 'app/shared/model/consultant/extra.model';

describe('Component Tests', () => {
    describe('Extra Management Detail Component', () => {
        let comp: ExtraDetailComponent;
        let fixture: ComponentFixture<ExtraDetailComponent>;
        const route = ({ data: of({ extra: new Extra(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [DashboardTestModule],
                declarations: [ExtraDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(ExtraDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(ExtraDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.extra).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
