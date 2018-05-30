"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var profile_service_1 = require("./profile.service");
var PageRibbonComponent = /** @class */ (function () {
    function PageRibbonComponent(profileService) {
        this.profileService = profileService;
    }
    PageRibbonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getProfileInfo().then(function (profileInfo) {
            _this.profileInfo = profileInfo;
            _this.ribbonEnv = profileInfo.ribbonEnv;
        });
    };
    PageRibbonComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-page-ribbon',
            template: "<div class=\"ribbon\" *ngIf=\"ribbonEnv\"><a href=\"\">{{ribbonEnv}}</a></div>",
            styleUrls: ['page-ribbon.css']
        }),
        tslib_1.__metadata("design:paramtypes", [profile_service_1.ProfileService])
    ], PageRibbonComponent);
    return PageRibbonComponent;
}());
exports.PageRibbonComponent = PageRibbonComponent;
//# sourceMappingURL=page-ribbon.component.js.map