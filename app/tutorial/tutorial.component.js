"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var TutorialComponent = (function () {
    function TutorialComponent(router) {
        this.router = router;
    }
    TutorialComponent.prototype.goToSignUp = function () {
        this.router.navigate(['log']);
    };
    TutorialComponent = __decorate([
        core_1.Component({
            selector: "ns-tutorial",
            moduleId: module.id,
            templateUrl: "./tutorial.component.html",
            styleUrls: ['./tutorial.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], TutorialComponent);
    return TutorialComponent;
}());
exports.TutorialComponent = TutorialComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHV0b3JpYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHV0b3JpYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQVMvRDtJQUdJLDJCQUFvQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtJQUFLLENBQUM7SUFFbkQsc0NBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBUFEsaUJBQWlCO1FBTDdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUFDLENBQUM7eUNBSVoseUJBQWdCO09BSHBDLGlCQUFpQixDQWE3QjtJQUFELHdCQUFDO0NBQUEsQUFiRCxJQWFDO0FBYlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zwqB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtdHV0b3JpYWxcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3R1dG9yaWFsLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnLi90dXRvcmlhbC5jb21wb25lbnQuY3NzJ119KVxyXG5leHBvcnQgY2xhc3MgVHV0b3JpYWxDb21wb25lbnQge1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlciA6IFJvdXRlckV4dGVuc2lvbnPCoCkgeyB9XHJcblxyXG4gICAgZ29Ub1NpZ25VcCgpe1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9nJ10pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIFxyXG4gICAgLy8gfVxyXG59Il19