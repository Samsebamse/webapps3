import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FaqComponent } from './faq/faq.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({

    imports: [
        BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, JsonpModule, RouterModule.forRoot([
            { path: 'faq', component: FaqComponent },
            { path: 'form', component: FormComponent },
            { path: 'list', component: ListComponent }
        ])
    ],

    declarations: [
        AppComponent, FaqComponent, FormComponent, ListComponent
    ],

    bootstrap: [AppComponent] //root component
})

export class AppModule { }

