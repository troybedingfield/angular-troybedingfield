import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./shared/components/header/header.component";
import { AppRoutingModule } from "./app.routes";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { ButtonComponent } from "./shared/components/button/button.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ContactFormComponent } from "./shared/components/contact-form/contact-form.component";
import { ContactService } from "./shared/services/contact.service";
import { HttpClientModule } from "@angular/common/http";
import { RecaptchaModule } from "ng-recaptcha";
import { RecaptchaFormsModule } from "ng-recaptcha";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        FooterComponent,
        ButtonComponent,
        ContactFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule,
        RecaptchaModule,
        RecaptchaFormsModule
    ],
    providers: [
        ContactService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }