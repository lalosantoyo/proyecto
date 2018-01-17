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
var tutorial_component_1 = require("./tutorial/tutorial.component");
// import {PassComponent} from "./pass/pass.component";
var compras_component_1 = require("./compras/compras.component");
var lugar_component_1 = require("./lugar/lugar.component");
// import {WizardComponent} from "./wizard/wizard.component";
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
                tutorial_component_1.TutorialComponent,
                // PassComponent,
                compras_component_1.ComprasComponent,
                lugar_component_1.LugarComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBQzlFLHNEQUFvRTtBQUVwRSwyREFBd0Q7QUFDeEQsaURBQStDO0FBQy9DLHFEQUFpRDtBQUNqRCw4REFBeUQ7QUFDekQsOERBQXlEO0FBQ3pELHdEQUFvRDtBQUNwRCwyREFBdUQ7QUFDdkQsb0VBQThEO0FBQzlELHVEQUF1RDtBQUN2RCxpRUFBNkQ7QUFDN0QsMkRBQXVEO0FBQ3ZELDZEQUE2RDtBQWtDN0Q7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQTdCckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQixxQ0FBZ0I7YUFDbkI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osNEJBQVk7Z0JBQ1osa0NBQWU7Z0JBQ2Ysa0NBQWU7Z0JBQ2YsOEJBQWE7Z0JBQ2IsZ0NBQWM7Z0JBQ2Qsc0NBQWlCO2dCQUNqQixpQkFBaUI7Z0JBQ2pCLG9DQUFnQjtnQkFDaEIsZ0NBQWM7YUFHakI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsRUFBRSxPQUFPLEVBQUUsNEJBQXFCLEVBQUUsUUFBUSxFQUFFLDhCQUFxQixFQUFFO2FBQ3RFO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOU01vZHVsZUZhY3RvcnlMb2FkZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7TG9nQ29tcG9uZW50fSBmcm9tIFwiLi9sb2cvbG9nLmNvbXBvbmVudFwiO1xuaW1wb3J0e1Npbmd1cENvbXBvbmVudH0gZnJvbSBcIi4vc2luZ3VwL3Npbmd1cC5jb21wb25lbnRcIjtcbmltcG9ydHtTcGxhc2hDb21wb25lbnR9IGZyb20gXCIuL3NwbGFzaC9zcGxhc2guY29tcG9uZW50XCI7XG5pbXBvcnQge1pvbmFDb21wb25lbnR9IGZyb20gXCIuL3pvbmEvem9uYS5jb21wb25lbnRcIjtcbmltcG9ydCB7Wm9uYWlDb21wb25lbnR9IGZyb20gXCIuL3pvbmFpL3pvbmFpLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtUdXRvcmlhbENvbXBvbmVudH1mcm9tIFwiLi90dXRvcmlhbC90dXRvcmlhbC5jb21wb25lbnRcIlxuLy8gaW1wb3J0IHtQYXNzQ29tcG9uZW50fSBmcm9tIFwiLi9wYXNzL3Bhc3MuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbXByYXNDb21wb25lbnR9IGZyb20gXCIuL2NvbXByYXMvY29tcHJhcy5jb21wb25lbnRcIjtcbmltcG9ydCB7THVnYXJDb21wb25lbnR9IGZyb20gXCIuL2x1Z2FyL2x1Z2FyLmNvbXBvbmVudFwiO1xuLy8gaW1wb3J0IHtXaXphcmRDb21wb25lbnR9IGZyb20gXCIuL3dpemFyZC93aXphcmQuY29tcG9uZW50XCI7XG5cblxuXG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIExvZ0NvbXBvbmVudCxcbiAgICAgICAgU2luZ3VwQ29tcG9uZW50LFxuICAgICAgICBTcGxhc2hDb21wb25lbnQsXG4gICAgICAgIFpvbmFDb21wb25lbnQsXG4gICAgICAgIFpvbmFpQ29tcG9uZW50LFxuICAgICAgICBUdXRvcmlhbENvbXBvbmVudCxcbiAgICAgICAgLy8gUGFzc0NvbXBvbmVudCxcbiAgICAgICAgQ29tcHJhc0NvbXBvbmVudCxcbiAgICAgICAgTHVnYXJDb21wb25lbnQsXG4gICAgICAgIC8vIFdpemFyZENvbXBvbmVudCxcblxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCB1c2VDbGFzczogTlNNb2R1bGVGYWN0b3J5TG9hZGVyIH1cbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19