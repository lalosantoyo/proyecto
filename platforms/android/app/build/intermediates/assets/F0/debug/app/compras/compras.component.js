"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Country = (function () {
    function Country(name) {
        this.name = name;
    }
    return Country;
}());
var europianCountries = ["burrito de verde", "burrito de rojo", "burrito de desebrada", "burrito de desebrada"];
var ComprasComponent = (function () {
    function ComprasComponent() {
        this.countries = [];
        for (var i = 0; i < europianCountries.length; i++) {
            this.countries.push(new Country(europianCountries[i]));
        }
    }
    ComprasComponent.prototype.onItemTap = function (args) {
        console.log("Item Tapped at cell index: " + args.index);
    };
    ComprasComponent = __decorate([
        core_1.Component({
            selector: "ns-compras",
            moduleId: module.id,
            templateUrl: "./compras.component.html",
            styleUrls: ['./compras.component.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [])
    ], ComprasComponent);
    return ComprasComponent;
}());
exports.ComprasComponent = ComprasComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcHJhcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21wcmFzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRTtBQUVuRTtJQUNJLGlCQUFtQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtJQUFJLENBQUM7SUFDeEMsY0FBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRUQsSUFBSSxpQkFBaUIsR0FBRyxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLHNCQUFzQixFQUFFLHNCQUFzQixDQUFDLENBQUM7QUFTaEg7SUFHSTtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBRXBCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNELENBQUM7SUFDTCxDQUFDO0lBRU0sb0NBQVMsR0FBaEIsVUFBaUIsSUFBSTtRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBYlEsZ0JBQWdCO1FBUDVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztZQUN0QyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtTQUNsRCxDQUFDOztPQUNXLGdCQUFnQixDQWM1QjtJQUFELHVCQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5jbGFzcyBDb3VudHJ5IHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHsgfVxyXG59XHJcblxyXG5sZXQgZXVyb3BpYW5Db3VudHJpZXMgPSBbXCJidXJyaXRvIGRlIHZlcmRlXCIsIFwiYnVycml0byBkZSByb2pvXCIsIFwiYnVycml0byBkZSBkZXNlYnJhZGFcIiwgXCJidXJyaXRvIGRlIGRlc2VicmFkYVwiXTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtY29tcHJhc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY29tcHJhcy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY29tcHJhcy5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcHJhc0NvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgY291bnRyaWVzOiBBcnJheTxDb3VudHJ5PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvdW50cmllcyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV1cm9waWFuQ291bnRyaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRyaWVzLnB1c2gobmV3IENvdW50cnkoZXVyb3BpYW5Db3VudHJpZXNbaV0pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uSXRlbVRhcChhcmdzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJdGVtIFRhcHBlZCBhdCBjZWxsIGluZGV4OiBcIiArIGFyZ3MuaW5kZXgpO1xyXG4gICAgfVxyXG59Il19