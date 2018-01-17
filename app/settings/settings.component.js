"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sidedrawer_1 = require("nativescript-pro-ui/sidedrawer");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var SettingsComponent = (function () {
    function SettingsComponent() {
        this.oneway = "One way bound label";
        this.twoway = "L o r e m   i p s u m   d o l o r   s i t   a m e t , consectetur   adipiscing   elit,   sed   do eiusmod  tempor  incididunt  ut  labore et  dolore  magna  aliqua.  Ut  enim  ad m i n i m   v e n i a m ,   q u i s   n o s t r u d exercitation   ullamco   laboris   nisi   ut aliquip ex ea commodo consequat.";
        this.counter = 0;
    }
    /* ***********************************************************
    * Use the sideDrawerTransition property to change the open/close animation of the drawer.
    *************************************************************/
    SettingsComponent.prototype.ngOnInit = function () {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
    };
    Object.defineProperty(SettingsComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    SettingsComponent.prototype.onDrawerButtonTap = function () {
        this.drawerComponent.sideDrawer.showDrawer();
    };
    SettingsComponent.prototype.changeLabelText = function () {
        this.twoway += " L o r e m   i p s u m   d o l o r   s i t   a m e t , consectetur   adipiscing   elit,   sed   do eiusmod  tempor  incididunt  ut  labore et  dolore  magna  aliqua.  Ut  enim  ad m i n i m   v e n i a m ,   q u i s   n o s t r u d exercitation   ullamco   laboris   nisi   ut aliquip ex ea commodo consequat. ";
        this.counter += 1;
    };
    SettingsComponent.prototype.onTextChanged = function (args) {
        var label = args.object;
        console.log("onTextChanged for " + this.counter + " times for element " + label);
    };
    __decorate([
        core_1.ViewChild("drawer"),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], SettingsComponent.prototype, "drawerComponent", void 0);
    SettingsComponent = __decorate([
        core_1.Component({
            selector: "Settings",
            moduleId: module.id,
            templateUrl: "./settings.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELDZEQUE4RjtBQUM5RixrRUFBZ0Y7QUFTaEY7SUErQkk7UUFKTyxXQUFNLEdBQUcscUJBQXFCLENBQUM7UUFDL0IsV0FBTSxHQUFHLHNUQUFzVCxDQUFDO1FBSW5VLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUF4QkQ7O2tFQUU4RDtJQUM5RCxvQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbUNBQXNCLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBRUQsc0JBQUksbURBQW9CO2FBQXhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUVEOzs7a0VBRzhEO0lBQzlELDZDQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFTRCwyQ0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE1BQU0sSUFBSSx3VEFBd1QsQ0FBQztRQUN4VSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQseUNBQWEsR0FBYixVQUFjLElBQWU7UUFDekIsSUFBSSxLQUFLLEdBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcscUJBQXFCLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDckYsQ0FBQztJQXRDb0I7UUFBcEIsZ0JBQVMsQ0FBQyxRQUFRLENBQUM7a0NBQWtCLGdDQUFzQjs4REFBQztJQUxwRCxpQkFBaUI7UUFMN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1NBQzNDLENBQUM7O09BQ1csaUJBQWlCLENBNEM3QjtJQUFELHdCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7QUE1Q1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtcHJvLXVpL3NpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXByby11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInVpL2xhYmVsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIlNldHRpbmdzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NldHRpbmdzLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBVc2UgdGhlIEBWaWV3Q2hpbGQgZGVjb3JhdG9yIHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgZHJhd2VyIGNvbXBvbmVudC5cbiAgICAqIEl0IGlzIHVzZWQgaW4gdGhlIFwib25EcmF3ZXJCdXR0b25UYXBcIiBmdW5jdGlvbiBiZWxvdyB0byBtYW5pcHVsYXRlIHRoZSBkcmF3ZXIuXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBAVmlld0NoaWxkKFwiZHJhd2VyXCIpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcblxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBVc2UgdGhlIHNpZGVEcmF3ZXJUcmFuc2l0aW9uIHByb3BlcnR5IHRvIGNoYW5nZSB0aGUgb3Blbi9jbG9zZSBhbmltYXRpb24gb2YgdGhlIGRyYXdlci5cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xuICAgIH1cblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBBY2NvcmRpbmcgdG8gZ3VpZGVsaW5lcywgaWYgeW91IGhhdmUgYSBkcmF3ZXIgb24geW91ciBwYWdlLCB5b3Ugc2hvdWxkIGFsd2F5c1xuICAgICogaGF2ZSBhIGJ1dHRvbiB0aGF0IG9wZW5zIGl0LiBVc2UgdGhlIHNob3dEcmF3ZXIoKSBmdW5jdGlvbiB0byBvcGVuIHRoZSBhcHAgZHJhd2VyIHNlY3Rpb24uXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBvbmV3YXkgPSBcIk9uZSB3YXkgYm91bmQgbGFiZWxcIjtcbiAgICBwdWJsaWMgdHdvd2F5ID0gXCJMIG8gciBlIG0gICBpIHAgcyB1IG0gICBkIG8gbCBvIHIgICBzIGkgdCAgIGEgbSBlIHQgLCBjb25zZWN0ZXR1ciAgIGFkaXBpc2NpbmcgICBlbGl0LCAgIHNlZCAgIGRvIGVpdXNtb2QgIHRlbXBvciAgaW5jaWRpZHVudCAgdXQgIGxhYm9yZSBldCAgZG9sb3JlICBtYWduYSAgYWxpcXVhLiAgVXQgIGVuaW0gIGFkIG0gaSBuIGkgbSAgIHYgZSBuIGkgYSBtICwgICBxIHUgaSBzICAgbiBvIHMgdCByIHUgZCBleGVyY2l0YXRpb24gICB1bGxhbWNvICAgbGFib3JpcyAgIG5pc2kgICB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LlwiO1xuICAgIHB1YmxpYyBjb3VudGVyOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcbiAgICB9XG5cbiAgICBjaGFuZ2VMYWJlbFRleHQoKSB7XG4gICAgICAgIHRoaXMudHdvd2F5ICs9IFwiIEwgbyByIGUgbSAgIGkgcCBzIHUgbSAgIGQgbyBsIG8gciAgIHMgaSB0ICAgYSBtIGUgdCAsIGNvbnNlY3RldHVyICAgYWRpcGlzY2luZyAgIGVsaXQsICAgc2VkICAgZG8gZWl1c21vZCAgdGVtcG9yICBpbmNpZGlkdW50ICB1dCAgbGFib3JlIGV0ICBkb2xvcmUgIG1hZ25hICBhbGlxdWEuICBVdCAgZW5pbSAgYWQgbSBpIG4gaSBtICAgdiBlIG4gaSBhIG0gLCAgIHEgdSBpIHMgICBuIG8gcyB0IHIgdSBkIGV4ZXJjaXRhdGlvbiAgIHVsbGFtY28gICBsYWJvcmlzICAgbmlzaSAgIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIFwiO1xuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gMTtcbiAgICB9XG5cbiAgICBvblRleHRDaGFuZ2VkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgICAgICBsZXQgbGFiZWwgPSA8TGFiZWw+YXJncy5vYmplY3Q7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25UZXh0Q2hhbmdlZCBmb3IgXCIgKyB0aGlzLmNvdW50ZXIgKyBcIiB0aW1lcyBmb3IgZWxlbWVudCBcIiArIGxhYmVsKTtcbiAgICB9XG59XG4iXX0=