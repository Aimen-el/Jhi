import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IUserExtra } from 'app/shared/model/msconsultant/user-extra.model';

type EntityResponseType = HttpResponse<IUserExtra>;
type EntityArrayResponseType = HttpResponse<IUserExtra[]>;

@Injectable()
export class UserExtraService {
    private resourceUrl = SERVER_API_URL + 'msconsultant/api/user-extras';

    constructor(private http: HttpClient) {}

    create(userExtra: IUserExtra): Observable<EntityResponseType> {
        return this.http.post<IUserExtra>(this.resourceUrl, userExtra, { observe: 'response' });
    }

    update(userExtra: IUserExtra): Observable<EntityResponseType> {
        return this.http.put<IUserExtra>(this.resourceUrl, userExtra, { observe: 'response' });
    }

    find(id: string): Observable<EntityResponseType> {
        return this.http.get<IUserExtra>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IUserExtra[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
