"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var SplashComponent = (function () {
    function SplashComponent(nav) {
        this.nav = nav;
        this.loadingText = 'Loading';
        this.timeSplash = 0;
        this.count = 0;
    }
    SplashComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            if (_this.timeSplash < 8000) {
                _this.timeSplash += 400;
                if (_this.count === 3) {
                    _this.count = 0;
                    _this.loadingText = 'Loading';
                }
                else {
                    _this.loadingText += '.';
                    _this.count++;
                }
            }
            else {
                _this.nav.navigate(['/log'], { clearHistory: true });
            }
        }, 400);
    };
    SplashComponent = __decorate([
        core_1.Component({
            selector: "ns-splash",
            moduleId: module.id,
            templateUrl: "./splash.component.html",
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], SplashComponent);
    return SplashComponent;
}());
exports.SplashComponent = SplashComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsYXNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwbGFzaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBUy9EO0lBUUkseUJBQW9CLEdBQXFCO1FBQXJCLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBSmxDLGdCQUFXLEdBQVcsU0FBUyxDQUFDO1FBRS9CLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixVQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQzBCLENBQUM7SUFFN0Msa0NBQVEsR0FBUjtRQUFBLGlCQWdCQztRQWRHLFdBQVcsQ0FBQztZQUNSLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDeEIsS0FBSSxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUM7Z0JBQ3ZCLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbEIsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQ2YsS0FBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7Z0JBQ2pDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osS0FBSSxDQUFDLFdBQVcsSUFBSSxHQUFHLENBQUM7b0JBQ3hCLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDakIsQ0FBQztZQUNMLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixLQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDeEQsQ0FBQztRQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUExQlEsZUFBZTtRQUwzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7U0FDekMsQ0FBQzt5Q0FTMkIseUJBQWdCO09BUmhDLGVBQWUsQ0EyQjNCO0lBQUQsc0JBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQTNCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9uc8KgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLXNwbGFzaFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc3BsYXNoLmNvbXBvbmVudC5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTcGxhc2hDb21wb25lbnQge1xyXG4gICAgXHJcblxyXG4gICAgXHJcbiAgICBwdWJsaWMgbG9hZGluZ1RleHQ6IHN0cmluZyA9ICdMb2FkaW5nJztcclxuXHJcbiAgICBwcml2YXRlIHRpbWVTcGxhc2ggPSAwO1xyXG4gICAgcHJpdmF0ZSBjb3VudCA9IDA7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdjogUm91dGVyRXh0ZW5zaW9ucykge31cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLnRpbWVTcGxhc2ggPCA4MDAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVTcGxhc2ggKz0gNDAwO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5jb3VudCA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ1RleHQgPSAnTG9hZGluZyc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ1RleHQgKz0gJy4nO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnQrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmF2Lm5hdmlnYXRlKFsnL2xvZyddLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDQwMCk7XHJcbiAgICB9XHJcbn0iXX0=