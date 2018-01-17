import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import {LogComponent} from "./log/log.component";
import{SingupComponent} from "./singup/singup.component";
import{SplashComponent} from "./splash/splash.component";
import{ZonaComponent} from "./zona/zona.component";
import{ZonaiComponent} from "./zonai/zonai.component";
import{TutorialComponent}from "./tutorial/tutorial.component";
import{PassComponent}from "./pass/pass.component";
import {ComprasComponent} from "./compras/compras.component";
import{LugarComponent} from "./lugar/lugar.component";
// import{WizardComponent} from "./wizard/wizard.component"



const routes: Routes = [
    { path: "", redirectTo: "/browse", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "browse", loadChildren: "./browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "./search/search.module#SearchModule" },
    { path: "featured", loadChildren: "./featured/featured.module#FeaturedModule" },
    { path: "settings", loadChildren: "./settings/settings.module#SettingsModule" },
    { path: "inicio", loadChildren: "./inicio/inicio.module#InicioModule" },
    { path: "pass", loadChildren: "./pass/pass.module#PassModule" },
    { path: "log", component: LogComponent },
    { path: "splash", component: SplashComponent },
    {path: "singup", component:SingupComponent},
    {path: "zona", component:ZonaComponent},
    {path: "zonai", component:ZonaiComponent},
    {path: "tutorial", component:TutorialComponent},
    // {path: "pass", component:PassComponent},
    {path: "compras", component:ComprasComponent},
    {path: "lugar", component:LugarComponent},
    // {path: "wizard", component:WizardComponent},

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
