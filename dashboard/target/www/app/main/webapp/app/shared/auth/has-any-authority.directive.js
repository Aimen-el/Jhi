"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var principal_service_1 = require("app/core/auth/principal.service");
/**
 * @whatItDoes Conditionally includes an HTML element if current user has any
 * of the authorities passed as the `expression`.
 *
 * @howToUse
 * ```
 *     <some-element *jhiHasAnyAuthority="'ROLE_ADMIN'">...</some-element>
 *
 *     <some-element *jhiHasAnyAuthority="['ROLE_ADMIN', 'ROLE_USER']">...</some-element>
 * ```
 */
var HasAnyAuthorityDirective = /** @class */ (function () {
    function HasAnyAuthorityDirective(principal, templateRef, viewContainerRef) {
        this.principal = principal;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
    }
    Object.defineProperty(HasAnyAuthorityDirective.prototype, "jhiHasAnyAuthority", {
        set: function (value) {
            var _this = this;
            this.authorities = typeof value === 'string' ? [value] : value;
            this.updateView();
            // Get notified each time authentication state changes.
            this.principal.getAuthenticationState().subscribe(function (identity) { return _this.updateView(); });
        },
        enumerable: true,
        configurable: true
    });
    HasAnyAuthorityDirective.prototype.updateView = function () {
        var _this = this;
        this.principal.hasAnyAuthority(this.authorities).then(function (result) {
            _this.viewContainerRef.clear();
            if (result) {
                _this.viewContainerRef.createEmbeddedView(_this.templateRef);
            }
        });
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], HasAnyAuthorityDirective.prototype, "jhiHasAnyAuthority", null);
    HasAnyAuthorityDirective = tslib_1.__decorate([
        core_1.Directive({
            selector: '[jhiHasAnyAuthority]'
        }),
        tslib_1.__metadata("design:paramtypes", [principal_service_1.Principal, typeof (_a = typeof core_1.TemplateRef !== "undefined" && core_1.TemplateRef) === "function" && _a || Object, typeof (_b = typeof core_1.ViewContainerRef !== "undefined" && core_1.ViewContainerRef) === "function" && _b || Object])
    ], HasAnyAuthorityDirective);
    return HasAnyAuthorityDirective;
    var _a, _b;
}());
exports.HasAnyAuthorityDirective = HasAnyAuthorityDirective;
//# sourceMappingURL=has-any-authority.directive.js.map