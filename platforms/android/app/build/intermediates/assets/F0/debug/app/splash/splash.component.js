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
            if (_this.progressValue < 25) {
                _this.progressValue += 7;
            }
        }, 200);
    };
    SplashComponent.prototype.onValueChanged = function (args) {
        var progressBar = args.object;
        console.log("Value changed for " + progressBar);
        console.log("New value: " + progressBar.value);
        // setInterval(() => {
        //     if(this.timeSplash < 8000) {
        //         this.timeSplash += 400;
        //         if(this.count === 3) {
        //             this.count = 0;
        //             this.loadingText = 'Loading';
        //         } else {
        //             this.loadingText += '.';
        //             this.count++;
        //         }
        //     } else {
        //         this.nav.navigate(['/tutorial'], { clearHistory:true});
        //     } 
        // }, 400)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsYXNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwbGFzaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBVS9EO0lBUUkseUJBQW9CLEdBQXFCO1FBQXJCLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBTGxDLGdCQUFXLEdBQVcsU0FBUyxDQUFDO1FBRy9CLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixVQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQzBCLENBQUM7SUFHN0Msa0NBQVEsR0FBUjtRQUFBLGlCQU9LO1FBTEcsV0FBVyxDQUFDO1lBQ1IsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLGFBQWEsR0FBRSxFQUFFLENBQUMsQ0FBQSxDQUFDO2dCQUMzQixLQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQztZQUN4QixDQUFDO1FBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELHdDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2YsSUFBSSxXQUFXLEdBQWEsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUV4QyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLFdBQVcsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQU1uRCxzQkFBc0I7UUFDdEIsbUNBQW1DO1FBQ25DLGtDQUFrQztRQUVsQyxpQ0FBaUM7UUFDakMsOEJBQThCO1FBQzlCLDRDQUE0QztRQUU1QyxtQkFBbUI7UUFDbkIsdUNBQXVDO1FBQ3ZDLDRCQUE0QjtRQUM1QixZQUFZO1FBQ1osZUFBZTtRQUNmLGtFQUFrRTtRQUVsRSxTQUFTO1FBQ1QsVUFBVTtJQUVkLENBQUM7SUFoRFEsZUFBZTtRQUwzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7U0FDekMsQ0FBQzt5Q0FTMkIseUJBQWdCO09BUmhDLGVBQWUsQ0FrRDNCO0lBQUQsc0JBQUM7Q0FBQSxBQWxERCxJQWtEQztBQWxEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9uc8KgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBQcm9ncmVzcyB9IGZyb20gXCJ1aS9wcm9ncmVzc1wiO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLXNwbGFzaFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc3BsYXNoLmNvbXBvbmVudC5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTcGxhc2hDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICBcclxuICAgIHB1YmxpYyBsb2FkaW5nVGV4dDogc3RyaW5nID0gJ0xvYWRpbmcnO1xyXG4gIFxyXG5cclxuICAgIHByaXZhdGUgdGltZVNwbGFzaCA9IDA7XHJcbiAgICBwcml2YXRlIGNvdW50ID0gMDtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmF2OiBSb3V0ZXJFeHRlbnNpb25zKSB7fVxyXG4gICAgcHVibGljIHByb2dyZXNzVmFsdWU6IG51bWJlcjtcclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICBcclxuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcm9ncmVzc1ZhbHVlIDwyNSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzVmFsdWUgKz0gNztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBvblZhbHVlQ2hhbmdlZChhcmdzKSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9ncmVzc0JhciA9IDxQcm9ncmVzcz5hcmdzLm9iamVjdDtcclxuICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlZhbHVlIGNoYW5nZWQgZm9yIFwiICsgcHJvZ3Jlc3NCYXIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyB2YWx1ZTogXCIgKyBwcm9ncmVzc0Jhci52YWx1ZSk7XHJcbiAgICAgICAgXHJcbiAgICBcclxuXHJcblxyXG5cclxuICAgICAgICAvLyBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmKHRoaXMudGltZVNwbGFzaCA8IDgwMDApIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMudGltZVNwbGFzaCArPSA0MDA7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgICAgICBpZih0aGlzLmNvdW50ID09PSAzKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5jb3VudCA9IDA7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5sb2FkaW5nVGV4dCA9ICdMb2FkaW5nJztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMubG9hZGluZ1RleHQgKz0gJy4nO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuY291bnQrKztcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMubmF2Lm5hdmlnYXRlKFsnL3R1dG9yaWFsJ10sIHsgY2xlYXJIaXN0b3J5OnRydWV9KTtcclxuXHJcbiAgICAgICAgLy8gICAgIH0gXHJcbiAgICAgICAgLy8gfSwgNDAwKVxyXG5cclxuICAgIH1cclxuICAgXHJcbn0iXX0=