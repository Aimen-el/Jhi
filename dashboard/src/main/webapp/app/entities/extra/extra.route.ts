import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core';
import { Extra } from '../../shared/model/extra.model';
import { ExtraService } from './extra.service';
import { ExtraComponent } from './extra.component';
import { ExtraDetailComponent } from './extra-detail.component';
import { ExtraUpdateComponent } from './extra-update.component';
import { ExtraDeletePopupComponent } from './extra-delete-dialog.component';

@Injectable()
export class ExtraResolve implements Resolve<any> {
    constructor(private service: ExtraService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id);
        }
        return new Extra();
    }
}

export const extraRoute: Routes = [
    {
        path: 'extra',
        component: ExtraComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Extras'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'extra/:id/view',
        component: ExtraDetailComponent,
        resolve: {
            extra: ExtraResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Extras'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'extra/new',
        component: ExtraUpdateComponent,
        resolve: {
            extra: ExtraResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Extras'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'extra/:id/edit',
        component: ExtraUpdateComponent,
        resolve: {
            extra: ExtraResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Extras'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const extraPopupRoute: Routes = [
    {
        path: 'extra/:id/delete',
        component: ExtraDeletePopupComponent,
        resolve: {
            extra: ExtraResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Extras'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
