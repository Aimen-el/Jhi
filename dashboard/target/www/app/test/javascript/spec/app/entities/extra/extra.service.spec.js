"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable max-line-length */
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/common/http/testing");
var extra_service_1 = require("app/entities/extra/extra.service");
var extra_model_1 = require("app/shared/model/extra.model");
var app_constants_1 = require("app/app.constants");
describe('Service Tests', function () {
    describe('Extra Service', function () {
        var injector;
        var service;
        var httpMock;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [testing_2.HttpClientTestingModule],
                providers: [extra_service_1.ExtraService]
            });
            injector = testing_1.getTestBed();
            service = injector.get(extra_service_1.ExtraService);
            httpMock = injector.get(testing_2.HttpTestingController);
        });
        describe('Service methods', function () {
            it('should call correct URL', function () {
                service.find(123).subscribe(function () { });
                var req = httpMock.expectOne({ method: 'GET' });
                var resourceUrl = app_constants_1.SERVER_API_URL + 'api/extras';
                expect(req.request.url).toEqual(resourceUrl + '/' + 123);
            });
            it('should create a Extra', function () {
                service.create(new extra_model_1.Extra(null)).subscribe(function (received) {
                    expect(received.body.id).toEqual(null);
                });
                var req = httpMock.expectOne({ method: 'POST' });
                req.flush({ id: null });
            });
            it('should update a Extra', function () {
                service.update(new extra_model_1.Extra(123)).subscribe(function (received) {
                    expect(received.body.id).toEqual(123);
                });
                var req = httpMock.expectOne({ method: 'PUT' });
                req.flush({ id: 123 });
            });
            it('should return a Extra', function () {
                service.find(123).subscribe(function (received) {
                    expect(received.body.id).toEqual(123);
                });
                var req = httpMock.expectOne({ method: 'GET' });
                req.flush({ id: 123 });
            });
            it('should return a list of Extra', function () {
                service.query(null).subscribe(function (received) {
                    expect(received.body[0].id).toEqual(123);
                });
                var req = httpMock.expectOne({ method: 'GET' });
                req.flush([new extra_model_1.Extra(123)]);
            });
            it('should delete a Extra', function () {
                service.delete(123).subscribe(function (received) {
                    expect(received.url).toContain('/' + 123);
                });
                var req = httpMock.expectOne({ method: 'DELETE' });
                req.flush(null);
            });
            it('should propagate not found response', function () {
                service.find(123).subscribe(null, function (_error) {
                    expect(_error.status).toEqual(404);
                });
                var req = httpMock.expectOne({ method: 'GET' });
                req.flush('Invalid request parameters', {
                    status: 404,
                    statusText: 'Bad Request'
                });
            });
        });
        afterEach(function () {
            httpMock.verify();
        });
    });
});
//# sourceMappingURL=extra.service.spec.js.map