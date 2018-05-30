"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var spyobject_1 = require("./spyobject");
var ng_jhipster_1 = require("ng-jhipster");
var MockEventManager = /** @class */ (function (_super) {
    tslib_1.__extends(MockEventManager, _super);
    function MockEventManager() {
        var _this = _super.call(this, ng_jhipster_1.JhiEventManager) || this;
        _this.broadcastSpy = _this.spy('broadcast').andReturn(_this);
        return _this;
    }
    return MockEventManager;
}(spyobject_1.SpyObject));
exports.MockEventManager = MockEventManager;
//# sourceMappingURL=mock-event-manager.service.js.map