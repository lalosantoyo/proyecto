import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NSModuleFactoryLoader } from "nativescript-angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {LogComponent} from "./log/log.component";
import{SingupComponent} from "./singup/singup.component";
import{SplashComponent} from "./splash/splash.component";
import {ZonaComponent} from "./zona/zona.component";
import {ZonaiComponent} from "./zonai/zonai.component";
import {TutorialComponent}from "./tutorial/tutorial.component"
// import {PassComponent} from "./pass/pass.component";
import {ComprasComponent} from "./compras/compras.component";
import {LugarComponent} from "./lugar/lugar.component";
// import {WizardComponent} from "./wizard/wizard.component";




@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LogComponent,
        SingupComponent,
        SplashComponent,
        ZonaComponent,
        ZonaiComponent,
        TutorialComponent,
        // PassComponent,
        ComprasComponent,
        LugarComponent,
        // WizardComponent,

    ],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
