"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var spyobject_1 = require("./spyobject");
var login_service_1 = require("app/core/login/login.service");
var MockLoginService = /** @class */ (function (_super) {
    tslib_1.__extends(MockLoginService, _super);
    function MockLoginService() {
        var _this = _super.call(this, login_service_1.LoginService) || this;
        _this.setLoginSpy({});
        _this.logoutSpy = _this.spy('logout').andReturn(_this);
        _this.registerSpy = _this.spy('register').andReturn(_this);
        _this.requestResetPasswordSpy = _this.spy('requestResetPassword').andReturn(_this);
        _this.cancelSpy = _this.spy('cancel').andReturn(_this);
        return _this;
    }
    MockLoginService.prototype.setLoginSpy = function (json) {
        this.loginSpy = this.spy('login').andReturn(Promise.resolve(json));
    };
    MockLoginService.prototype.setResponse = function (json) {
        this.setLoginSpy(json);
    };
    return MockLoginService;
}(spyobject_1.SpyObject));
exports.MockLoginService = MockLoginService;
//# sourceMappingURL=mock-login.service.js.map