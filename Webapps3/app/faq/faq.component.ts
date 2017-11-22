import { Component, OnInit } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Faq } from "./faq";
import { AccordionModule } from "ngx-accordion";

import "rxjs/add/operator/map";
import { Headers } from "@angular/http";

@Component({
    selector: "faqcomp",
    templateUrl: "/app/faq/faq.component.html"
})

export class FaqComponent {

    tittel: string;
    alleFaqs: Array<Faq>;

    constructor(private _http: Http) {
        this.tittel = "Ofte spurte spørsmål fra kunder";
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
    
