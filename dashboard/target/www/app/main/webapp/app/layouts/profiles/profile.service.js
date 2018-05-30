"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_constants_1 = require("app/app.constants");
var profile_info_model_1 = require("./profile-info.model");
var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        this.infoUrl = app_constants_1.SERVER_API_URL + 'management/info';
    }
    ProfileService.prototype.getProfileInfo = function () {
        if (!this.profileInfo) {
            this.profileInfo = this.http
                .get(this.infoUrl, { observe: 'response' })
                .map(function (res) {
                var data = res.body;
                var pi = new profile_info_model_1.ProfileInfo();
                pi.activeProfiles = data['activeProfiles'];
                var displayRibbonOnProfiles = data['display-ribbon-on-profiles'].split(',');
                if (pi.activeProfiles) {
                    var ribbonProfiles = displayRibbonOnProfiles.filter(function (profile) { return pi.activeProfiles.includes(profile); });
                    if (ribbonProfiles.length !== 0) {
                        pi.ribbonEnv = ribbonProfiles[0];
                    }
                    pi.inProduction = pi.activeProfiles.includes('prod');
                    pi.swaggerEnabled = pi.activeProfiles.includes('swagger');
                }
                return pi;
            })
                .toPromise();
        }
        return this.profileInfo;
    };
    ProfileService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof http_1.HttpClient !== "undefined" && http_1.HttpClient) === "function" && _a || Object])
    ], ProfileService);
    return ProfileService;
    var _a;
}());
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map