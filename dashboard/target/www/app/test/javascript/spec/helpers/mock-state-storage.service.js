"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var spyobject_1 = require("./spyobject");
var state_storage_service_1 = require("app/core/auth/state-storage.service");
var MockStateStorageService = /** @class */ (function (_super) {
    tslib_1.__extends(MockStateStorageService, _super);
    function MockStateStorageService() {
        var _this = _super.call(this, state_storage_service_1.StateStorageService) || this;
        _this.setUrlSpy({});
        _this.storeUrlSpy = _this.spy('storeUrl').andReturn(_this);
        return _this;
    }
    MockStateStorageService.prototype.setUrlSpy = function (json) {
        this.getUrlSpy = this.spy('getUrl').andReturn(json);
    };
    MockStateStorageService.prototype.setResponse = function (json) {
        this.setUrlSpy(json);
    };
    return MockStateStorageService;
}(spyobject_1.SpyObject));
exports.MockStateStorageService = MockStateStorageService;
//# sourceMappingURL=mock-state-storage.service.js.map