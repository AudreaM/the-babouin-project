import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "../components/app.component";

// Les routes :
/*
const appRoutes : Routes = [
    {path : 'users', component : AppComponent}
]
*/


@NgModule({
    imports : [
        BrowserModule,
        /*RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )*/
    ],
    declarations : [AppComponent],
    bootstrap : [AppComponent]
})

export class AppModule {}