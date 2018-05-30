"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var spyobject_1 = require("./spyobject");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var MockActiveModal = /** @class */ (function (_super) {
    tslib_1.__extends(MockActiveModal, _super);
    function MockActiveModal() {
        var _this = _super.call(this, ng_bootstrap_1.NgbActiveModal) || this;
        _this.dismissSpy = _this.spy('dismiss').andReturn(_this);
        return _this;
    }
    return MockActiveModal;
}(spyobject_1.SpyObject));
exports.MockActiveModal = MockActiveModal;
//# sourceMappingURL=mock-active-modal.service.js.map