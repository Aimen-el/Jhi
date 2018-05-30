"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var spyobject_1 = require("./spyobject");
var principal_service_1 = require("app/core/auth/principal.service");
var MockPrincipal = /** @class */ (function (_super) {
    tslib_1.__extends(MockPrincipal, _super);
    function MockPrincipal() {
        var _this = _super.call(this, principal_service_1.Principal) || this;
        _this.setIdentitySpy({});
        return _this;
    }
    MockPrincipal.prototype.setIdentitySpy = function (json) {
        this.identitySpy = this.spy('identity').andReturn(Promise.resolve(json));
    };
    MockPrincipal.prototype.setResponse = function (json) {
        this.setIdentitySpy(json);
    };
    return MockPrincipal;
}(spyobject_1.SpyObject));
exports.MockPrincipal = MockPrincipal;
//# sourceMappingURL=mock-principal.service.js.map