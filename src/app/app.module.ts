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
        ReactiveFormsModule
    ],
    providers: [
        ContactService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }