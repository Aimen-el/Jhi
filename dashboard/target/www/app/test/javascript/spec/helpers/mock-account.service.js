"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var spyobject_1 = require("./spyobject");
var account_service_1 = require("app/core/auth/account.service");
var MockAccountService = /** @class */ (function (_super) {
    tslib_1.__extends(MockAccountService, _super);
    function MockAccountService() {
        var _this = _super.call(this, account_service_1.AccountService) || this;
        _this.fakeResponse = null;
        _this.getSpy = _this.spy('get').andReturn(_this);
        _this.saveSpy = _this.spy('save').andReturn(_this);
        return _this;
    }
    MockAccountService.prototype.subscribe = function (callback) {
        callback(this.fakeResponse);
    };
    MockAccountService.prototype.setResponse = function (json) {
        this.fakeResponse = json;
    };
    return MockAccountService;
}(spyobject_1.SpyObject));
exports.MockAccountService = MockAccountService;
//# sourceMappingURL=mock-account.service.js.map