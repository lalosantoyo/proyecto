"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WizardStepComponent = (function () {
    function WizardStepComponent() {
        this.hidden = false;
        this.isValid = true;
        this.showNext = true;
        this.showPrev = true;
        this.onNext = new core_1.EventEmitter();
        this.onPrev = new core_1.EventEmitter();
        this.onComplete = new core_1.EventEmitter();
        this._isActive = false;
        this.isDisabled = true;
    }
    Object.defineProperty(WizardStepComponent.prototype, "isActive", {
        get: function () {
            return this._isActive;
        },
        set: function (isActive) {
            this._isActive = isActive;
            this.isDisabled = false;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], WizardStepComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], WizardStepComponent.prototype, "hidden", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], WizardStepComponent.prototype, "isValid", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], WizardStepComponent.prototype, "showNext", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], WizardStepComponent.prototype, "showPrev", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], WizardStepComponent.prototype, "onNext", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], WizardStepComponent.prototype, "onPrev", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], WizardStepComponent.prototype, "onComplete", void 0);
    __decorate([
        core_1.Input('isActive'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], WizardStepComponent.prototype, "isActive", null);
    WizardStepComponent = __decorate([
        core_1.Component({
            selector: 'wizard-step',
            template: "\n    <div [hidden]=\"!isActive\">\n      <ng-content></ng-content>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], WizardStepComponent);
    return WizardStepComponent;
}());
exports.WizardStepComponent = WizardStepComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2l6YXJkLXN0ZXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVFO0FBV3ZFO0lBY0U7UUFaUyxXQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsYUFBUSxHQUFZLElBQUksQ0FBQztRQUN6QixhQUFRLEdBQVksSUFBSSxDQUFDO1FBRXhCLFdBQU0sR0FBc0IsSUFBSSxtQkFBWSxFQUFPLENBQUM7UUFDcEQsV0FBTSxHQUFzQixJQUFJLG1CQUFZLEVBQU8sQ0FBQztRQUNwRCxlQUFVLEdBQXNCLElBQUksbUJBQVksRUFBTyxDQUFDO1FBRTFELGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDbkMsZUFBVSxHQUFZLElBQUksQ0FBQztJQUVYLENBQUM7SUFHakIsc0JBQUkseUNBQVE7YUFLWjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7YUFQRCxVQUFhLFFBQWlCO1lBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1lBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBbkJRO1FBQVIsWUFBSyxFQUFFOztzREFBZTtJQUNkO1FBQVIsWUFBSyxFQUFFOzt1REFBeUI7SUFDeEI7UUFBUixZQUFLLEVBQUU7O3dEQUF5QjtJQUN4QjtRQUFSLFlBQUssRUFBRTs7eURBQTBCO0lBQ3pCO1FBQVIsWUFBSyxFQUFFOzt5REFBMEI7SUFFeEI7UUFBVCxhQUFNLEVBQUU7a0NBQVMsbUJBQVk7dURBQWdDO0lBQ3BEO1FBQVQsYUFBTSxFQUFFO2tDQUFTLG1CQUFZO3VEQUFnQztJQUNwRDtRQUFULGFBQU0sRUFBRTtrQ0FBYSxtQkFBWTsyREFBZ0M7SUFRbEU7UUFEQyxZQUFLLENBQUMsVUFBVSxDQUFDOzs7dURBSWpCO0lBcEJVLG1CQUFtQjtRQVQvQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUNSLHFGQUlDO1NBQ0YsQ0FBQzs7T0FDVyxtQkFBbUIsQ0EwQi9CO0lBQUQsMEJBQUM7Q0FBQSxBQTFCRCxJQTBCQztBQTFCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3aXphcmQtc3RlcCcsXG4gIHRlbXBsYXRlOlxuICBgXG4gICAgPGRpdiBbaGlkZGVuXT1cIiFpc0FjdGl2ZVwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFdpemFyZFN0ZXBDb21wb25lbnQge1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBoaWRkZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaXNWYWxpZDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHNob3dOZXh0OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgc2hvd1ByZXY6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBPdXRwdXQoKSBvbk5leHQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvblByZXY6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvbkNvbXBsZXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHByaXZhdGUgX2lzQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgQElucHV0KCdpc0FjdGl2ZScpXG4gIHNldCBpc0FjdGl2ZShpc0FjdGl2ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzQWN0aXZlID0gaXNBY3RpdmU7XG4gICAgdGhpcy5pc0Rpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICBnZXQgaXNBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuICB9XG5cbn1cbiJdfQ==