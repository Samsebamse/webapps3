import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Headers } from "@angular/http";
import { Enquiry } from "./enquiry";

@Component({
    selector: "formcomp",
    templateUrl: "/app/form/form.component.html"
})

export class FormComponent {
    tittel: string;
    skjema: FormGroup;
    bekreftelse: string;

    constructor(private _http: Http, private fb: FormBuilder, private router: Router) {
        this.skjema = fb.group({
            id: [""],
            name: [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")])],
            surname: [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-ZøæåØÆÅ\\-. ]{2,30}")])],
            email: [null, Validators.compose([Validators.required, Validators.pattern("[a-z0-9æøå'*+/=?^_`{|}~-]+(?:\.[a-z0-9æøå'*+/=?^_`{|}~-]+)*@(?:[a-z0-9æøå](?:[a-z0-9æøå]*[a-z0-9æøå])?\.)+[a-z0-9æøå](?:[a-z0-9æøå]*[a-z0-9æøå])+")])],
            question: [null, Validators.compose([Validators.required, Validators.pattern("[0-9a-zA-ZøæåØÆÅ?\\-. ]{0,500}")])]
        });
    }
    ngOnInit()
    {
        this.tittel = "Skjema for henvedelser til kunderservice";
    }

    vedSubmit() {
        this.lagreSpm();
        this.router.navigate(['/list']);
    }


    lagreSpm() {
        var savedEnquiry = new Enquiry();

        savedEnquiry.name = this.skjema.value.name;
        savedEnquiry.surname = this.skjema.value.surname;
        savedEnquiry.email = this.skjema.value.email;
        savedEnquiry.question = this.skjema.value.question;

        var body: string = JSON.stringify(savedEnquiry);
        var headers = new Headers({ "Content-Type": "application/json" });

        this._http.post("api/webapi/SetEnquiry", body, { headers: headers })
            .map(returData => returData.toString())
            .subscribe(
            retur => {
                this.router.navigate(['/list']);
            },
            error => alert(error),
            () => console.log("ferdig post-api/spm")
        );

    };

}