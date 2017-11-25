"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ngx_accordion_1 = require("ngx-accordion");
var ngx_filter_pipe_1 = require("ngx-filter-pipe");
var app_component_1 = require("./app.component");
var faq_component_1 = require("./faq/faq.component");
var form_component_1 = require("./form/form.component");
var list_component_1 = require("./list/list.component");
var router_1 = require("@angular/router");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, http_1.JsonpModule, ngx_accordion_1.AccordionModule, ngx_filter_pipe_1.FilterPipeModule, router_1.RouterModule.forRoot([
                { path: 'faq', component: faq_component_1.FaqComponent },
                { path: 'form', component: form_component_1.FormComponent },
                { path: 'list', component: list_component_1.ListComponent }
            ])
        ],
        declarations: [
            app_component_1.AppComponent, faq_component_1.FaqComponent, form_component_1.FormComponent, list_component_1.ListComponent
        ],
        bootstrap: [app_component_1.AppComponent] //root component
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map