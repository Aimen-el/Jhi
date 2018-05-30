import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaySharedModule } from 'app/shared';
import { GatewayAdminModule } from 'app/admin/admin.module';
import {
    UserExtraService,
    UserExtraComponent,
    UserExtraDetailComponent,
    UserExtraUpdateComponent,
    UserExtraDeletePopupComponent,
    UserExtraDeleteDialogComponent,
    userExtraRoute,
    userExtraPopupRoute,
    UserExtraResolve
} from './';

const ENTITY_STATES = [...userExtraRoute, ...userExtraPopupRoute];

@NgModule({
    imports: [GatewaySharedModule, GatewayAdminModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        UserExtraComponent,
        UserExtraDetailComponent,
        UserExtraUpdateComponent,
        UserExtraDeleteDialogComponent,
        UserExtraDeletePopupComponent
    ],
    entryComponents: [UserExtraComponent, UserExtraUpdateComponent, UserExtraDeleteDialogComponent, UserExtraDeletePopupComponent],
    providers: [UserExtraService, UserExtraResolve],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GatewayUserExtraModule {}
