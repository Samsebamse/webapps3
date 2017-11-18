import { Component, OnInit } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Faq } from "./faq";

import "rxjs/add/operator/map";
import { Headers } from "@angular/http";

@Component({
    selector: "faq",
    templateUrl: "/app/faq/faq.component.html"
})

export class FaqComponent {

    alleFaqs: Array<Faq>;

    constructor(private _http: Http) {

    }
    ngOnInit(): void {
        this.hentAlleFaqs();
    }

    dropDownHandler(): void {
       
    }

    hentAlleFaqs() {
        this._http.get("api/webapi/")
            .map(returData => {
                let JsonData = returData.json();
                return JsonData;
            })
            .subscribe(
            JsonData => {
                this.alleFaqs = [];
                if (JsonData) {
                    for (let faqObjekt of JsonData) {
                        this.alleFaqs.push(faqObjekt);
                    }
                };
            },
            error => alert(error),
            () => console.log("ferdig get-api/kunde")
            );

    };
}
    
