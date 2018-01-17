"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var PantallasComponent = (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function PantallasComponent(router) {
        this.router = router;
    }
    PantallasComponent.prototype.goToSignUp = function () {
        this.router.navigate(['singup']);
    };
    PantallasComponent.prototype.goTohome = function () {
        this.router.navigate(['inicio']);
    };
    PantallasComponent.prototype.ngOnInit = function () {
    };
    PantallasComponent = __decorate([
        core_1.Component({
            selector: "ns-pantallas",
            moduleId: module.id,
            templateUrl: "./pantallas.component.html",
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], PantallasComponent);
    return PantallasComponent;
}());
exports.PantallasComponent = PantallasComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFudGFsbGFzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhbnRhbGxhcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBUy9EO0lBR0ksNklBQTZJO0lBQzdJLGlIQUFpSDtJQUVqSCw0QkFBb0IsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7SUFBSyxDQUFDO0lBRW5ELHVDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELHFDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUdELHFDQUFRLEdBQVI7SUFFQSxDQUFDO0lBbEJRLGtCQUFrQjtRQUw5QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7U0FDNUMsQ0FBQzt5Q0FPK0IseUJBQWdCO09BTnBDLGtCQUFrQixDQW1COUI7SUFBRCx5QkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9uc8KgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLXBhbnRhbGxhc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFudGFsbGFzLmNvbXBvbmVudC5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYW50YWxsYXNDb21wb25lbnQge1xyXG4gICAgXHJcblxyXG4gICAgLy8gVGhpcyBwYXR0ZXJuIG1ha2VzIHVzZSBvZiBBbmd1bGFy4oCZcyBkZXBlbmRlbmN5IGluamVjdGlvbiBpbXBsZW1lbnRhdGlvbiB0byBpbmplY3QgYW4gaW5zdGFuY2Ugb2YgdGhlIEl0ZW1TZXJ2aWNlIHNlcnZpY2UgaW50byB0aGlzIGNsYXNzLiBcclxuICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXJFeHRlbnNpb25zwqApIHsgfVxyXG5cclxuICAgIGdvVG9TaWduVXAoKXtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3Npbmd1cCddKTtcclxuICAgIH1cclxuICAgIGdvVG9ob21lKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydpbmljaW8nXSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgXHJcbiAgICB9XHJcbn0iXX0=