import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { JhiAlertService } from 'ng-jhipster';

import { IUserExtra } from 'app/shared/model/msconsultant/user-extra.model';
import { UserExtraService } from './user-extra.service';
import { IUser, UserService } from 'app/core';

@Component({
    selector: 'jhi-user-extra-update',
    templateUrl: './user-extra-update.component.html'
})
export class UserExtraUpdateComponent implements OnInit {
    private _userExtra: IUserExtra;
    isSaving: boolean;

    users: IUser[];

    constructor(
        private jhiAlertService: JhiAlertService,
        private userExtraService: UserExtraService,
        private userService: UserService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.route.data.subscribe(({ userExtra }) => {
            this.userExtra = userExtra.body ? userExtra.body : userExtra;
        });
        this.userService.query().subscribe(
            (res: HttpResponse<IUser[]>) => {
                this.users = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.userExtra.id !== undefined) {
            this.subscribeToSaveResponse(this.userExtraService.update(this.userExtra));
        } else {
            this.subscribeToSaveResponse(this.userExtraService.create(this.userExtra));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<IUserExtra>>) {
        result.subscribe((res: HttpResponse<IUserExtra>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackUserById(index: number, item: IUser) {
        return item.id;
    }
    get userExtra() {
        return this._userExtra;
    }

    set userExtra(userExtra: IUserExtra) {
        this._userExtra = userExtra;
    }
}
