import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import {LogComponent} from "./log/log.component";
import{SingupComponent} from "./singup/singup.component";
import { SlashScreenComponent } from "./Splashscreen/Splashscreen.component";


const routes: Routes = [
    { path: "", redirectTo: "/log", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "browse", loadChildren: "./browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "./search/search.module#SearchModule" },
    { path: "featured", loadChildren: "./featured/featured.module#FeaturedModule" },
    { path: "settings", loadChildren: "./settings/settings.module#SettingsModule" },
    { path: "inicio", loadChildren: "./inicio/inicio.module#InicioModule" },
    { path: "splash-screen", loadChildren: "./Splashscreen/Splashscreen.module#SplashscreenModule" },

    { path: "log", component: LogComponent },
    {path: "singup", component:SingupComponent},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
