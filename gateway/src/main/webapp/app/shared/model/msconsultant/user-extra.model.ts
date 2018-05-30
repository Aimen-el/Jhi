import { IUser } from 'app/core/user/user.model';

export interface IUserExtra {
    id?: number;
    telephone?: string;
    user?: IUser;
}

export class UserExtra implements IUserExtra {
    constructor(public id?: number, public telephone?: string, public user?: IUser) {}
}
