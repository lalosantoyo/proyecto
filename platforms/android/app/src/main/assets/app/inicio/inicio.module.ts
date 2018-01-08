import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { SharedModule } from "../shared/shared.module";
import { InicioRoutingModule } from "./inicio-routing.module";
import { InicioComponent } from "./inicio.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        InicioRoutingModule,
        SharedModule
    ],
    declarations: [
        InicioComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class InicioModule { }