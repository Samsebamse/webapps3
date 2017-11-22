import { Component } from '@angular/core';
import { Router } from '@angular/router' 

@Component({
    selector: "appcomp",
    templateUrl: "./app/app.component.html"
})

export class AppComponent {
    constructor(private router: Router) {
        this.router.navigate(['/faq']);
    }
}