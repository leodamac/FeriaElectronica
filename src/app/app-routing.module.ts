import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
    import { BrowserModule } from '@angular/platform-browser';
    import { RouteReuseStrategy } from '@angular/router';

    import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

    import { AppComponent } from './app.component';
    import { HashLocationStrategy, LocationStrategy } from '@angular/common';

    @NgModule({
        declarations: [AppComponent],
        imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
        providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
            { provide: LocationStrategy, useClass: HashLocationStrategy }],
        bootstrap: [AppComponent],
    })
    export class AppModule { }