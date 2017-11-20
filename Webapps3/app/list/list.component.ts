import { Component, OnInit } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Enquiry } from "../form/enquiry";

import "rxjs/add/operator/map";
import { Headers } from "@angular/http";

@Component({
    selector: "list",
    templateUrl: "/app/list/list.component.html"
})

export class ListComponent {

    alleEnquiries: Array<Enquiry>;

    constructor(private _http: Http) {

    }
    ngOnInit(): void {
        this.hentAlleEnquiries();
    }

    hentAlleEnquiries() {
        this._http.get("api/webapi/GetEnquiries")
            .map(returData => {
                let JsonData = returData.json();
                return JsonData;
            })
            .subscribe(
            JsonData => {
                this.alleEnquiries = [];
                if (JsonData) {
                    for (let enquiryObjekt of JsonData) {
                        this.alleEnquiries.push(enquiryObjekt);
                    }
                };
            },
            error => alert(error),
            () => console.log("ferdig get-api/enquiry")
            );
    }
}