"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var FaqComponent = (function () {
    function FaqComponent(_http) {
        this._http = _http;
    }
    FaqComponent.prototype.ngOnInit = function () {
        this.hentAlleFaqs();
    };
    FaqComponent.prototype.dropDownHandler = function () {
    };
    FaqComponent.prototype.hentAlleFaqs = function () {
        var _this = this;
        this._http.get("api/webapi/")
            .map(function (returData) {
            var JsonData = returData.json();
            return JsonData;
        })
            .subscribe(function (JsonData) {
            _this.alleFaqs = [];
            if (JsonData) {
                for (var _i = 0, JsonData_1 = JsonData; _i < JsonData_1.length; _i++) {
                    var faqObjekt = JsonData_1[_i];
                    _this.alleFaqs.push(faqObjekt);
                }
            }
            ;
        }, function (error) { return alert(error); }, function () { return console.log("ferdig get-api/kunde"); });
    };
    ;
    return FaqComponent;
}());
FaqComponent = __decorate([
    core_1.Component({
        selector: "faq",
        templateUrl: "/app/faq/faq.component.html"
    }),
    __metadata("design:paramtypes", [http_1.Http])
], FaqComponent);
exports.FaqComponent = FaqComponent;
//# sourceMappingURL=faq.component.js.map