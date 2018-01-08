"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SliderComponent = (function () {
    function SliderComponent() {
        this.images = [];
        this.images = [
            {
                title: 'Image 1 (resources folder)',
                file: 'res://logo'
            },
        ];
    }
    SliderComponent = __decorate([
        core_1.Component({
            selector: "ns-slider",
            moduleId: module.id,
            // >> (hide)
            // styleUrls: ["./../style.css"],
            // // << (hide)
            templateUrl: "./slider.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
}());
exports.SliderComponent = SliderComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNsaWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFVMUM7SUFHSTtRQUZVLFdBQU0sR0FBZSxFQUFFLENBQUM7UUFHOUIsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNWO2dCQUNJLEtBQUssRUFBRSw0QkFBNEI7Z0JBQ25DLElBQUksRUFBRSxZQUFZO2FBQ3JCO1NBRUosQ0FBQztJQUNOLENBQUM7SUFYUSxlQUFlO1FBUjNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsWUFBWTtZQUNaLGlDQUFpQztZQUNqQyxlQUFlO1lBQ2YsV0FBVyxFQUFFLHlCQUF5QjtTQUN6QyxDQUFDOztPQUNXLGVBQWUsQ0FZM0I7SUFBRCxzQkFBQztDQUFBLEFBWkQsSUFZQztBQVpZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtc2xpZGVyXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgLy8gPj4gKGhpZGUpXHJcbiAgICAvLyBzdHlsZVVybHM6IFtcIi4vLi4vc3R5bGUuY3NzXCJdLFxyXG4gICAgLy8gLy8gPDwgKGhpZGUpXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NsaWRlci5jb21wb25lbnQuaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2xpZGVyQ29tcG9uZW50IHtcclxuICAgIHByb3RlY3RlZCBpbWFnZXM6IEFycmF5PGFueT4gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmltYWdlcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdJbWFnZSAxIChyZXNvdXJjZXMgZm9sZGVyKScsXHJcbiAgICAgICAgICAgICAgICBmaWxlOiAncmVzOi8vbG9nbydcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxufSJdfQ==