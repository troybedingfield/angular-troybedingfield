import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./shared/components/header/header.component";
import { AppRoutingModule } from "./app.routes";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { ButtonComponent } from "./shared/components/button/button.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        FooterComponent,
        ButtonComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }