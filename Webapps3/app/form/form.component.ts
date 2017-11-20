import { Component, OnInit } from '@angular/core';
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
    bekreftelse: string;

    constructor(private _http: Http, private fb: FormBuilder) {
        this.skjema = fb.group({
            id: [""],
            name: [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")])],
            surname: [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")])],
            email: [null, Validators.compose([Validators.required, Validators.pattern("[0-9a-zA-ZøæåØÆÅ\\-. ]{2,30}")])],
            question: [null, Validators.compose([Validators.required, Validators.pattern("[0-9a-zA-ZøæåØÆÅ\\-. ]{10,500}")])]
        });
    }
    ngOnInit() {
    }

    vedSubmit() {

        this.lagreSpm();
    }

    bekreft() {

        this.skjema.setValue({
            name: "",
            surname: "",
            email: "",
            question: ""
        });

        this.bekreftelse = "Spørsmålet er sendt til kundeservice!";
    }

    lagreSpm() {
        var savedEnquiry = new Enquiry();

        savedEnquiry.name = this.skjema.value.name;
        savedEnquiry.surname = this.skjema.value.surname;
        savedEnquiry.email = this.skjema.value.email;
        savedEnquiry.question = this.skjema.value.question;

        var body: string = JSON.stringify(savedEnquiry);
        var headers = new Headers({ "Content-Type": "application/json" });

        this._http.post("api/webapi", body, { headers: headers })
            .map(returData => returData.toString())
            .subscribe(
            retur => {
                this.bekreft();
            },
            error => alert(error),
            () => console.log("ferdig post-api/kunde")
        );

    };

}