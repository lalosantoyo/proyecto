"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var log_component_1 = require("./log/log.component");
var singup_component_1 = require("./singup/singup.component");
var splash_component_1 = require("./splash/splash.component");
var zona_component_1 = require("./zona/zona.component");
var zonai_component_1 = require("./zonai/zonai.component");
var slider_component_1 = require("./slider/slider.component");
var routes = [
    { path: "", redirectTo: "/slaider", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "browse", loadChildren: "./browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "./search/search.module#SearchModule" },
    { path: "featured", loadChildren: "./featured/featured.module#FeaturedModule" },
    { path: "settings", loadChildren: "./settings/settings.module#SettingsModule" },
    { path: "inicio", loadChildren: "./inicio/inicio.module#InicioModule" },
    { path: "log", component: log_component_1.LogComponent },
    { path: "splash", component: splash_component_1.SplashComponent },
    { path: "singup", component: singup_component_1.SingupComponent },
    { path: "zona", component: zona_component_1.ZonaComponent },
    { path: "zonai", component: zonai_component_1.ZonaiComponent },
    { path: "slaider", component: slider_component_1.SliderComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUN2RSxxREFBaUQ7QUFDakQsOERBQXlEO0FBQ3pELDhEQUF5RDtBQUN6RCx3REFBbUQ7QUFDbkQsMkRBQXNEO0FBQ3RELDhEQUF1RDtBQUl2RCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3ZELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsK0JBQStCLEVBQUU7SUFDL0QsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxxQ0FBcUMsRUFBRTtJQUN2RSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLHFDQUFxQyxFQUFFO0lBQ3ZFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsMkNBQTJDLEVBQUU7SUFDL0UsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSwyQ0FBMkMsRUFBRTtJQUMvRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLHFDQUFxQyxFQUFFO0lBQ3ZFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsNEJBQVksRUFBRTtJQUN4QyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUU7SUFDOUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBQyxrQ0FBZSxFQUFDO0lBQzNDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUMsOEJBQWEsRUFBQztJQUN2QyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDLGdDQUFjLEVBQUM7SUFDekMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBQyxrQ0FBZSxFQUFDO0NBQy9DLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7TG9nQ29tcG9uZW50fSBmcm9tIFwiLi9sb2cvbG9nLmNvbXBvbmVudFwiO1xuaW1wb3J0e1Npbmd1cENvbXBvbmVudH0gZnJvbSBcIi4vc2luZ3VwL3Npbmd1cC5jb21wb25lbnRcIjtcbmltcG9ydHtTcGxhc2hDb21wb25lbnR9IGZyb20gXCIuL3NwbGFzaC9zcGxhc2guY29tcG9uZW50XCI7XG5pbXBvcnR7Wm9uYUNvbXBvbmVudH0gZnJvbSBcIi4vem9uYS96b25hLmNvbXBvbmVudFwiO1xuaW1wb3J0e1pvbmFpQ29tcG9uZW50fSBmcm9tIFwiLi96b25haS96b25haS5jb21wb25lbnRcIjtcbmltcG9ydHtTbGlkZXJDb21wb25lbnR9ZnJvbSBcIi4vc2xpZGVyL3NsaWRlci5jb21wb25lbnRcIlxuXG5cblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9zbGFpZGVyXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwiaG9tZVwiLCBsb2FkQ2hpbGRyZW46IFwiLi9ob21lL2hvbWUubW9kdWxlI0hvbWVNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJicm93c2VcIiwgbG9hZENoaWxkcmVuOiBcIi4vYnJvd3NlL2Jyb3dzZS5tb2R1bGUjQnJvd3NlTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwic2VhcmNoXCIsIGxvYWRDaGlsZHJlbjogXCIuL3NlYXJjaC9zZWFyY2gubW9kdWxlI1NlYXJjaE1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcImZlYXR1cmVkXCIsIGxvYWRDaGlsZHJlbjogXCIuL2ZlYXR1cmVkL2ZlYXR1cmVkLm1vZHVsZSNGZWF0dXJlZE1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcInNldHRpbmdzXCIsIGxvYWRDaGlsZHJlbjogXCIuL3NldHRpbmdzL3NldHRpbmdzLm1vZHVsZSNTZXR0aW5nc01vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcImluaWNpb1wiLCBsb2FkQ2hpbGRyZW46IFwiLi9pbmljaW8vaW5pY2lvLm1vZHVsZSNJbmljaW9Nb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJsb2dcIiwgY29tcG9uZW50OiBMb2dDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwic3BsYXNoXCIsIGNvbXBvbmVudDogU3BsYXNoQ29tcG9uZW50IH0sXG4gICAge3BhdGg6IFwic2luZ3VwXCIsIGNvbXBvbmVudDpTaW5ndXBDb21wb25lbnR9LFxuICAgIHtwYXRoOiBcInpvbmFcIiwgY29tcG9uZW50OlpvbmFDb21wb25lbnR9LFxuICAgIHtwYXRoOiBcInpvbmFpXCIsIGNvbXBvbmVudDpab25haUNvbXBvbmVudH0sXG4gICAge3BhdGg6IFwic2xhaWRlclwiLCBjb21wb25lbnQ6U2xpZGVyQ29tcG9uZW50fSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=