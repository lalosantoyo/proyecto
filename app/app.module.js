"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var log_component_1 = require("./log/log.component");
var singup_component_1 = require("./singup/singup.component");
var splash_component_1 = require("./splash/splash.component");
var zona_component_1 = require("./zona/zona.component");
var zonai_component_1 = require("./zonai/zonai.component");
var slider_component_1 = require("./slider/slider.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                log_component_1.LogComponent,
                singup_component_1.SingupComponent,
                splash_component_1.SplashComponent,
                zona_component_1.ZonaComponent,
                zonai_component_1.ZonaiComponent,
                slider_component_1.SliderComponent,
            ],
            providers: [
                { provide: core_1.NgModuleFactoryLoader, useClass: router_1.NSModuleFactoryLoader }
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBQzlFLHNEQUFvRTtBQUVwRSwyREFBd0Q7QUFDeEQsaURBQStDO0FBQy9DLHFEQUFpRDtBQUNqRCw4REFBeUQ7QUFDekQsOERBQXlEO0FBQ3pELHdEQUFvRDtBQUNwRCwyREFBdUQ7QUFDdkQsOERBQTBEO0FBOEIxRDtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBekJyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLHFDQUFnQjthQUNuQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWiw0QkFBWTtnQkFDWixrQ0FBZTtnQkFDZixrQ0FBZTtnQkFDZiw4QkFBYTtnQkFDYixnQ0FBYztnQkFDZCxrQ0FBZTthQUVsQjtZQUNELFNBQVMsRUFBRTtnQkFDUCxFQUFFLE9BQU8sRUFBRSw0QkFBcUIsRUFBRSxRQUFRLEVBQUUsOEJBQXFCLEVBQUU7YUFDdEU7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5TTW9kdWxlRmFjdG9yeUxvYWRlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtMb2dDb21wb25lbnR9IGZyb20gXCIuL2xvZy9sb2cuY29tcG9uZW50XCI7XG5pbXBvcnR7U2luZ3VwQ29tcG9uZW50fSBmcm9tIFwiLi9zaW5ndXAvc2luZ3VwLmNvbXBvbmVudFwiO1xuaW1wb3J0e1NwbGFzaENvbXBvbmVudH0gZnJvbSBcIi4vc3BsYXNoL3NwbGFzaC5jb21wb25lbnRcIjtcbmltcG9ydCB7Wm9uYUNvbXBvbmVudH0gZnJvbSBcIi4vem9uYS96b25hLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtab25haUNvbXBvbmVudH0gZnJvbSBcIi4vem9uYWkvem9uYWkuY29tcG9uZW50XCI7XG5pbXBvcnQge1NsaWRlckNvbXBvbmVudH0gZnJvbSBcIi4vc2xpZGVyL3NsaWRlci5jb21wb25lbnRcIjtcblxuXG5cblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTG9nQ29tcG9uZW50LFxuICAgICAgICBTaW5ndXBDb21wb25lbnQsXG4gICAgICAgIFNwbGFzaENvbXBvbmVudCxcbiAgICAgICAgWm9uYUNvbXBvbmVudCxcbiAgICAgICAgWm9uYWlDb21wb25lbnQsXG4gICAgICAgIFNsaWRlckNvbXBvbmVudCxcblxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCB1c2VDbGFzczogTlNNb2R1bGVGYWN0b3J5TG9hZGVyIH1cbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19