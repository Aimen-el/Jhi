import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IUserExtra } from 'app/shared/model/msconsultant/user-extra.model';

@Component({
    selector: 'jhi-user-extra-detail',
    templateUrl: './user-extra-detail.component.html'
})
export class UserExtraDetailComponent implements OnInit {
    userExtra: IUserExtra;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.data.subscribe(({ userExtra }) => {
            this.userExtra = userExtra.body ? userExtra.body : userExtra;
        });
    }

    previousState() {
        window.history.back();
    }
}
