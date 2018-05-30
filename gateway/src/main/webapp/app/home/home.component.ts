import { Component, OnInit } from '@angular/core';
import { JhiEventManager } from 'ng-jhipster';
import { LoginService, Principal, Account } from 'app/core';
import { IUserExtra } from 'app/shared/model/msconsultant/user-extra.model';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { UserExtraService } from 'app/entities/msconsultant/user-extra/user-extra.service';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: ['home.css']
})
export class HomeComponent implements OnInit {
    account: Account;
    userExtra: IUserExtra;
    usersExtra: IUserExtra[];

    constructor(
        private userExtraService: UserExtraService,
        private principal: Principal,
        private loginService: LoginService,
        private eventManager: JhiEventManager
    ) {}

    ngOnInit() {
        this.loadAll();
        this.principal.identity().then(account => {
            this.account = account;
        });
        this.registerAuthenticationSuccess();
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', message => {
            this.principal.identity().then(account => {
                this.account = account;
            });
        });
    }
    loadAll() {
        this.userExtraService.query().subscribe((res: HttpResponse<IUserExtra[]>) => {
            this.usersExtra = res.body;
        });
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    login() {
        this.loginService.login();
    }
}
