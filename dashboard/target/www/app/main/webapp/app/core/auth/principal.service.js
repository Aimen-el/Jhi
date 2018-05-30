"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var account_service_1 = require("./account.service");
var Principal = /** @class */ (function () {
    function Principal(account) {
        this.account = account;
        this.authenticated = false;
        this.authenticationState = new Subject_1.Subject();
    }
    Principal.prototype.authenticate = function (identity) {
        this.userIdentity = identity;
        this.authenticated = identity !== null;
        this.authenticationState.next(this.userIdentity);
    };
    Principal.prototype.hasAnyAuthority = function (authorities) {
        return Promise.resolve(this.hasAnyAuthorityDirect(authorities));
    };
    Principal.prototype.hasAnyAuthorityDirect = function (authorities) {
        if (!this.authenticated || !this.userIdentity || !this.userIdentity.authorities) {
            return false;
        }
        for (var i = 0; i < authorities.length; i++) {
            if (this.userIdentity.authorities.includes(authorities[i])) {
                return true;
            }
        }
        return false;
    };
    Principal.prototype.hasAuthority = function (authority) {
        if (!this.authenticated) {
            return Promise.resolve(false);
        }
        return this.identity().then(function (id) {
            return Promise.resolve(id.authorities && id.authorities.includes(authority));
        }, function () {
            return Promise.resolve(false);
        });
    };
    Principal.prototype.identity = function (force) {
        var _this = this;
        if (force === true) {
            this.userIdentity = undefined;
        }
        // check and see if we have retrieved the userIdentity data from the server.
        // if we have, reuse it by immediately resolving
        if (this.userIdentity) {
            return Promise.resolve(this.userIdentity);
        }
        // retrieve the userIdentity data from the server, update the identity object, and then resolve.
        return this.account
            .get()
            .toPromise()
            .then(function (response) {
            var account = response.body;
            if (account) {
                _this.userIdentity = account;
                _this.authenticated = true;
            }
            else {
                _this.userIdentity = null;
                _this.authenticated = false;
            }
            _this.authenticationState.next(_this.userIdentity);
            return _this.userIdentity;
        })
            .catch(function (err) {
            _this.userIdentity = null;
            _this.authenticated = false;
            _this.authenticationState.next(_this.userIdentity);
            return null;
        });
    };
    Principal.prototype.isAuthenticated = function () {
        return this.authenticated;
    };
    Principal.prototype.isIdentityResolved = function () {
        return this.userIdentity !== undefined;
    };
    Principal.prototype.getAuthenticationState = function () {
        return this.authenticationState.asObservable();
    };
    Principal.prototype.getImageUrl = function () {
        return this.isIdentityResolved() ? this.userIdentity.imageUrl : null;
    };
    Principal = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [account_service_1.AccountService])
    ], Principal);
    return Principal;
}());
exports.Principal = Principal;
//# sourceMappingURL=principal.service.js.map