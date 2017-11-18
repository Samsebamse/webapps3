import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Headers } from "@angular/http";
import { Enquiry } from "./enquiry";

@Component({
    selector: "form",
    templateUrl: "/app/form/form.component.html"
})

export class FormComponent {

    skjema: FormGroup;

    constructor(private _http: Http, private fb: FormBuilder) {
        this.skjema = fb.group({
            id: [""],
            name: [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")])],
            surname: [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")])],
            email: [null, Validators.compose([Validators.required, Validators.pattern("[0-9a-zA-ZøæåØÆÅ\\-. ]{2,30}")])],
            question: [null, Validators.compose([Validators.required, Validators.pattern("[0-9a-zA-ZøæåØÆÅ\\-. ]{10,500}")])]
        });
    }

    vedSubmit() {

        this.lagreFaq();
    }

    lagreFaq() {
        var savedEnquiry = new Enquiry();

        savedEnquiry.name = this.skjema.value.fornavn;
        savedEnquiry.surname = this.skjema.value.etternavn;

        var body: string = JSON.stringify(savedEnquiry);
        var headers = new Headers({ "Content-Type": "application/json" });

        this._http.post("api/webapi", body, { headers: headers })
            .map(returData => returData.toString())
            .subscribe(
            retur => {
                //Vis alle manuell lagt inn spørsmål!
            },
            error => alert(error),
            () => console.log("ferdig post-api/kunde")
            );
    };

}