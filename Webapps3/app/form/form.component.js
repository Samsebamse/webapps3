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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_2 = require("@angular/http");
var enquiry_1 = require("./enquiry");
var FormComponent = (function () {
    function FormComponent(_http, fb, router) {
        this._http = _http;
        this.fb = fb;
        this.router = router;
        this.skjema = fb.group({
            id: [""],
            name: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")])],
            surname: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")])],
            email: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("[0-9a-zA-ZøæåØÆÅ\\-.@ ]{5,30}")])],
            question: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("[a-zA-ZøæåØÆÅ\\-.? ]{10,500}")])]
        });
    }
    FormComponent.prototype.ngOnInit = function () {
        this.tittel = "Skjema for henvedelser til kunderservice";
    };
    FormComponent.prototype.vedSubmit = function () {
        this.lagreSpm();
        this.router.navigate(['/list']);
    };
    FormComponent.prototype.lagreSpm = function () {
        var _this = this;
        var savedEnquiry = new enquiry_1.Enquiry();
        savedEnquiry.name = this.skjema.value.name;
        savedEnquiry.surname = this.skjema.value.surname;
        savedEnquiry.email = this.skjema.value.email;
        savedEnquiry.question = this.skjema.value.question;
        var body = JSON.stringify(savedEnquiry);
        var headers = new http_2.Headers({ "Content-Type": "application/json" });
        this._http.post("api/webapi/SetEnquiry", body, { headers: headers })
            .map(function (returData) { return returData.toString(); })
            .subscribe(function (retur) {
            _this.router.navigate(['/list']);
        }, function (error) { return alert(error); }, function () { return console.log("ferdig post-api/spm"); });
    };
    ;
    return FormComponent;
}());
FormComponent = __decorate([
    core_1.Component({
        selector: "formcomp",
        templateUrl: "/app/form/form.component.html"
    }),
    __metadata("design:paramtypes", [http_1.Http, forms_1.FormBuilder, router_1.Router])
], FormComponent);
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map