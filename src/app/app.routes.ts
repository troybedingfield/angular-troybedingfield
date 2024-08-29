import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { DesignComponent } from './design/design.component';
import { CasestudyComponent } from './design/casestudy/casestudy.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'design', component: DesignComponent },
    { path: 'design/casestudy', component: CasestudyComponent },
    { path: '**', component: PagenotfoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'top' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

