import { Component, OnInit } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Faq } from "./faq";

import "rxjs/add/operator/map";
import { Headers } from "@angular/http";

@Component({
    selector: "faqcomp",
    templateUrl: "/app/faq/faq.component.html"
})

export class FaqComponent {

    alleFaqs: Array<Faq>;

    constructor(private _http: Http) {

    }
    ngOnInit(): void {
        this.hentAlleFaqs();
    }

    hentAlleFaqs() {
        this._http.get("api/webapi/GetFaqs")
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
            () => console.log("ferdig get-api/faq")
            );

    };
}
    
