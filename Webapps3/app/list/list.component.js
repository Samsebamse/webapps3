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
var ListComponent = (function () {
    function ListComponent(_http) {
        this._http = _http;
        this.tittel = "Spørsmål sendt inn fra kunder";
    }
    ListComponent.prototype.ngOnInit = function () {
        this.hentAlleEnquiries();
    };
    ListComponent.prototype.hentAlleEnquiries = function () {
        var _this = this;
        this._http.get("api/webapi/GetEnquiries")
            .map(function (returData) {
            var JsonData = returData.json();
            return JsonData;
        })
            .subscribe(function (JsonData) {
            _this.alleEnquiries = [];
            if (JsonData) {
                for (var _i = 0, JsonData_1 = JsonData; _i < JsonData_1.length; _i++) {
                    var enquiryObjekt = JsonData_1[_i];
                    _this.alleEnquiries.push(enquiryObjekt);
                }
            }
            ;
        }, function (error) { return alert(error); }, function () { return console.log("ferdig get-api/enquiry"); });
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: "listcomp",
        templateUrl: "/app/list/list.component.html"
    }),
    __metadata("design:paramtypes", [http_1.Http])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map