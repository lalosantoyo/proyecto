"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var SlashScreenComponent = (function () {
    function SlashScreenComponent(nav) {
        this.nav = nav;
        this.cargandotext = 'Cargando';
        this.timeSplah = 0;
        this.count = 0;
    }
    SlashScreenComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            if (_this.timeSplah < 300) {
                _this.timeSplah += 400;
                if (_this.count === 3) {
                    _this.count = 0;
                    _this.cargandotext = 'Cargando';
                }
                else {
                    _this.cargandotext += '.';
                    _this.count++;
                }
            }
            else {
                _this.nav.navigate(['/log'], { clearHistory: true });
            }
        });
    };
    SlashScreenComponent = __decorate([
        core_1.Component({
            selector: "ns-splah-screen",
            moduleId: module.id,
            templateUrl: "./splash-screen.component.html",
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], SlashScreenComponent);
    return SlashScreenComponent;
}());
exports.SlashScreenComponent = SlashScreenComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BsYXNoc2NyZWVuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNwbGFzaHNjcmVlbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBUy9EO0lBSUksOEJBQW9CLEdBQW9CO1FBQXBCLFFBQUcsR0FBSCxHQUFHLENBQWlCO1FBSGpDLGlCQUFZLEdBQVUsVUFBVSxDQUFDO1FBQ2hDLGNBQVMsR0FBQyxDQUFDLENBQUM7UUFDWixVQUFLLEdBQUMsQ0FBQyxDQUFDO0lBQzJCLENBQUM7SUFDNUMsdUNBQVEsR0FBUjtRQUFBLGlCQWlCQztRQWhCRSxXQUFXLENBQUM7WUFDUixFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsU0FBUyxHQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUM7Z0JBQ25CLEtBQUksQ0FBQyxTQUFTLElBQUUsR0FBRyxDQUFDO2dCQUNwQixFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsS0FBSyxLQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7b0JBQ2YsS0FBSSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUM7b0JBQ2IsS0FBSSxDQUFDLFlBQVksR0FBQyxVQUFVLENBQUM7Z0JBQ2pDLENBQUM7Z0JBQUEsSUFBSSxDQUFBLENBQUM7b0JBQ0YsS0FBSSxDQUFDLFlBQVksSUFBRSxHQUFHLENBQUM7b0JBQ3ZCLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDakIsQ0FBQztZQUNMLENBQUM7WUFBQSxJQUFJLENBQUEsQ0FBQztnQkFDRixLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUMsWUFBWSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7WUFDckQsQ0FBQztRQUNMLENBQUMsQ0FFQSxDQUFBO0lBQ0osQ0FBQztJQXRCUSxvQkFBb0I7UUFMaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxnQ0FBZ0M7U0FDaEQsQ0FBQzt5Q0FLMEIseUJBQWdCO09BSi9CLG9CQUFvQixDQTRCNUI7SUFBRCwyQkFBQztDQUFBLEFBNUJMLElBNEJLO0FBNUJRLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9uc8KgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLXNwbGFoLXNjcmVlblwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc3BsYXNoLXNjcmVlbi5jb21wb25lbnQuaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2xhc2hTY3JlZW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBwdWJsaWMgY2FyZ2FuZG90ZXh0OnN0cmluZyA9ICdDYXJnYW5kbyc7XHJcbiAgICBwcml2YXRlIHRpbWVTcGxhaD0wO1xyXG4gICAgcHJpdmF0ZSBjb3VudD0wO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuYXY6Um91dGVyRXh0ZW5zaW9ucykge31cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgc2V0SW50ZXJ2YWwoKCk9PntcclxuICAgICAgICAgICBpZih0aGlzLnRpbWVTcGxhaDwzMDApe1xyXG4gICAgICAgICAgICAgICB0aGlzLnRpbWVTcGxhaCs9NDAwO1xyXG4gICAgICAgICAgICAgICBpZih0aGlzLmNvdW50PT09Myl7XHJcbiAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50PTA7XHJcbiAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmdhbmRvdGV4dD0nQ2FyZ2FuZG8nO1xyXG4gICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZ2FuZG90ZXh0Kz0nLic7XHJcbiAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50Kys7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgdGhpcy5uYXYubmF2aWdhdGUoWycvbG9nJ10sIHtjbGVhckhpc3Rvcnk6dHJ1ZX0pO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgIH1cclxuXHJcbiAgICAgICApXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgSXRlbVNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuIFxyXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxyXG5cclxuICAgIH1cclxuIl19