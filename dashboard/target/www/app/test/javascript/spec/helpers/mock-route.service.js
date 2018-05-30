"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var router_1 = require("@angular/router");
var spyobject_1 = require("./spyobject");
var rxjs_1 = require("rxjs");
var MockActivatedRoute = /** @class */ (function (_super) {
    tslib_1.__extends(MockActivatedRoute, _super);
    function MockActivatedRoute(parameters) {
        var _this = _super.call(this) || this;
        _this.queryParams = rxjs_1.Observable.of(parameters);
        _this.params = rxjs_1.Observable.of(parameters);
        _this.data = rxjs_1.Observable.of(tslib_1.__assign({}, parameters, { pagingParams: {
                page: 10,
                ascending: false,
                predicate: 'id'
            } }));
        return _this;
    }
    return MockActivatedRoute;
}(router_1.ActivatedRoute));
exports.MockActivatedRoute = MockActivatedRoute;
var MockRouter = /** @class */ (function (_super) {
    tslib_1.__extends(MockRouter, _super);
    function MockRouter() {
        var _this = _super.call(this, router_1.Router) || this;
        _this.navigateSpy = _this.spy('navigate');
        return _this;
    }
    return MockRouter;
}(spyobject_1.SpyObject));
exports.MockRouter = MockRouter;
//# sourceMappingURL=mock-route.service.js.map