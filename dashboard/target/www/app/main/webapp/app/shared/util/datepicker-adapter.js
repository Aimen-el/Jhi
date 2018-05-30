"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * Angular bootstrap Date adapter
 */
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var moment = require("moment");
var NgbDateMomentAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(NgbDateMomentAdapter, _super);
    function NgbDateMomentAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDateMomentAdapter.prototype.fromModel = function (date) {
        if (date != null && date.isValid()) {
            return { year: date.year(), month: date.month() + 1, day: date.date() };
        }
        return null;
    };
    NgbDateMomentAdapter.prototype.toModel = function (date) {
        return date ? moment(date.year + '-' + date.month + '-' + date.day, 'YYYY-MM-DD') : null;
    };
    NgbDateMomentAdapter = tslib_1.__decorate([
        core_1.Injectable()
    ], NgbDateMomentAdapter);
    return NgbDateMomentAdapter;
}(ng_bootstrap_1.NgbDateAdapter));
exports.NgbDateMomentAdapter = NgbDateMomentAdapter;
//# sourceMappingURL=datepicker-adapter.js.map