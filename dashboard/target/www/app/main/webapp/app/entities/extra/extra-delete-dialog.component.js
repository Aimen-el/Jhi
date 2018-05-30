"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng_jhipster_1 = require("ng-jhipster");
var extra_service_1 = require("./extra.service");
var ExtraDeleteDialogComponent = /** @class */ (function () {
    function ExtraDeleteDialogComponent(extraService, activeModal, eventManager) {
        this.extraService = extraService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
    }
    ExtraDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
    };
    ExtraDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.extraService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'extraListModification',
                content: 'Deleted an extra'
            });
            _this.activeModal.dismiss(true);
        });
    };
    ExtraDeleteDialogComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-extra-delete-dialog',
            templateUrl: './extra-delete-dialog.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [extra_service_1.ExtraService, typeof (_a = typeof ng_bootstrap_1.NgbActiveModal !== "undefined" && ng_bootstrap_1.NgbActiveModal) === "function" && _a || Object, typeof (_b = typeof ng_jhipster_1.JhiEventManager !== "undefined" && ng_jhipster_1.JhiEventManager) === "function" && _b || Object])
    ], ExtraDeleteDialogComponent);
    return ExtraDeleteDialogComponent;
    var _a, _b;
}());
exports.ExtraDeleteDialogComponent = ExtraDeleteDialogComponent;
var ExtraDeletePopupComponent = /** @class */ (function () {
    function ExtraDeletePopupComponent(route, router, modalService) {
        this.route = route;
        this.router = router;
        this.modalService = modalService;
    }
    ExtraDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (_a) {
            var extra = _a.extra;
            setTimeout(function () {
                _this.ngbModalRef = _this.modalService.open(ExtraDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
                _this.ngbModalRef.componentInstance.extra = extra.body;
                _this.ngbModalRef.result.then(function (result) {
                    _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                    _this.ngbModalRef = null;
                }, function (reason) {
                    _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                    _this.ngbModalRef = null;
                });
            }, 0);
        });
    };
    ExtraDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.ngbModalRef = null;
    };
    ExtraDeletePopupComponent = tslib_1.__decorate([
        core_1.Component({
            selector: 'jhi-extra-delete-popup',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object, typeof (_d = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _d || Object, typeof (_e = typeof ng_bootstrap_1.NgbModal !== "undefined" && ng_bootstrap_1.NgbModal) === "function" && _e || Object])
    ], ExtraDeletePopupComponent);
    return ExtraDeletePopupComponent;
    var _c, _d, _e;
}());
exports.ExtraDeletePopupComponent = ExtraDeletePopupComponent;
//# sourceMappingURL=extra-delete-dialog.component.js.map