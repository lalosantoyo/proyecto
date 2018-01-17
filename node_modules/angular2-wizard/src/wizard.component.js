"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var wizard_step_component_1 = require("./wizard-step.component");
var WizardComponent = (function () {
    function WizardComponent() {
        this._steps = [];
        this._isCompleted = false;
        this.onStepChanged = new core_1.EventEmitter();
    }
    WizardComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.wizardSteps.forEach(function (step) { return _this._steps.push(step); });
        this.steps[0].isActive = true;
    };
    Object.defineProperty(WizardComponent.prototype, "steps", {
        get: function () {
            return this._steps.filter(function (step) { return !step.hidden; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "isCompleted", {
        get: function () {
            return this._isCompleted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "activeStep", {
        get: function () {
            return this.steps.find(function (step) { return step.isActive; });
        },
        set: function (step) {
            if (step !== this.activeStep && !step.isDisabled) {
                this.activeStep.isActive = false;
                step.isActive = true;
                this.onStepChanged.emit(step);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "activeStepIndex", {
        get: function () {
            return this.steps.indexOf(this.activeStep);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "hasNextStep", {
        get: function () {
            return this.activeStepIndex < this.steps.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "hasPrevStep", {
        get: function () {
            return this.activeStepIndex > 0;
        },
        enumerable: true,
        configurable: true
    });
    WizardComponent.prototype.goToStep = function (step) {
        if (!this.isCompleted) {
            this.activeStep = step;
        }
    };
    WizardComponent.prototype.next = function () {
        if (this.hasNextStep) {
            var nextStep = this.steps[this.activeStepIndex + 1];
            this.activeStep.onNext.emit();
            nextStep.isDisabled = false;
            this.activeStep = nextStep;
        }
    };
    WizardComponent.prototype.previous = function () {
        if (this.hasPrevStep) {
            var prevStep = this.steps[this.activeStepIndex - 1];
            this.activeStep.onPrev.emit();
            prevStep.isDisabled = false;
            this.activeStep = prevStep;
        }
    };
    WizardComponent.prototype.complete = function () {
        this.activeStep.onComplete.emit();
        this._isCompleted = true;
    };
    __decorate([
        core_1.ContentChildren(wizard_step_component_1.WizardStepComponent),
        __metadata("design:type", core_1.QueryList)
    ], WizardComponent.prototype, "wizardSteps", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], WizardComponent.prototype, "onStepChanged", void 0);
    WizardComponent = __decorate([
        core_1.Component({
            selector: 'form-wizard',
            template: "<div class=\"card\">\n    <div class=\"card-header\">\n      <ul class=\"nav nav-justified\">\n        <li class=\"nav-item\" *ngFor=\"let step of steps\" [ngClass]=\"{'active': step.isActive, 'enabled': !step.isDisabled, 'disabled': step.isDisabled, 'completed': isCompleted}\">\n          <a (click)=\"goToStep(step)\">{{step.title}}</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"card-block\">\n      <ng-content></ng-content>\n    </div>\n    <div class=\"card-footer\" [hidden]=\"isCompleted\">\n        <button type=\"button\" class=\"btn btn-secondary float-left\" (click)=\"previous()\" [hidden]=\"!hasPrevStep || !activeStep.showPrev\">Previous</button>\n        <button type=\"button\" class=\"btn btn-secondary float-right\" (click)=\"next()\" [disabled]=\"!activeStep.isValid\" [hidden]=\"!hasNextStep || !activeStep.showNext\">Next</button>\n        <button type=\"button\" class=\"btn btn-secondary float-right\" (click)=\"complete()\" [disabled]=\"!activeStep.isValid\" [hidden]=\"hasNextStep\">Done</button>\n    </div>\n  </div>",
            styles: [
                '.card { height: 100%; }',
                '.card-header { background-color: #fff; padding: 0; font-size: 1.25rem; }',
                '.card-block { overflow-y: auto; }',
                '.card-footer { background-color: #fff; border-top: 0 none; }',
                '.nav-item { padding: 1rem 0rem; border-bottom: 0.5rem solid #ccc; }',
                '.active { font-weight: bold; color: black; border-bottom-color: #1976D2 !important; }',
                '.enabled { cursor: pointer; border-bottom-color: rgb(88, 162, 234); }',
                '.disabled { color: #ccc; }',
                '.completed { cursor: default; }'
            ]
        }),
        __metadata("design:paramtypes", [])
    ], WizardComponent);
    return WizardComponent;
}());
exports.WizardComponent = WizardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndpemFyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBOEc7QUFDOUcsaUVBQThEO0FBbUM5RDtJQVVFO1FBTlEsV0FBTSxHQUErQixFQUFFLENBQUM7UUFDeEMsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFHdEMsa0JBQWEsR0FBc0MsSUFBSSxtQkFBWSxFQUF1QixDQUFDO0lBRTNFLENBQUM7SUFFakIsNENBQWtCLEdBQWxCO1FBQUEsaUJBR0M7UUFGQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxzQkFBSSxrQ0FBSzthQUFUO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFaLENBQVksQ0FBQyxDQUFDO1FBQ2xELENBQUM7OztPQUFBO0lBRUQsc0JBQUksd0NBQVc7YUFBZjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksdUNBQVU7YUFBZDtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxRQUFRLEVBQWIsQ0FBYSxDQUFDLENBQUM7UUFDaEQsQ0FBQzthQUVELFVBQWUsSUFBeUI7WUFDdEMsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDakQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsQ0FBQztRQUNILENBQUM7OztPQVJBO0lBVUQsc0JBQVcsNENBQWU7YUFBMUI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksd0NBQVc7YUFBZjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUN0RCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHdDQUFXO2FBQWY7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFTSxrQ0FBUSxHQUFmLFVBQWdCLElBQXlCO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQztJQUNILENBQUM7SUFFTSw4QkFBSSxHQUFYO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxRQUFRLEdBQXdCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN6RSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM5QixRQUFRLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztRQUM3QixDQUFDO0lBQ0gsQ0FBQztJQUVNLGtDQUFRLEdBQWY7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLFFBQVEsR0FBd0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzlCLFFBQVEsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBQzdCLENBQUM7SUFDSCxDQUFDO0lBRU0sa0NBQVEsR0FBZjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUExRUQ7UUFEQyxzQkFBZSxDQUFDLDJDQUFtQixDQUFDO2tDQUN4QixnQkFBUzt3REFBc0I7SUFNNUM7UUFEQyxhQUFNLEVBQUU7a0NBQ00sbUJBQVk7MERBQWdFO0lBUmhGLGVBQWU7UUFqQzNCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQ1Isc2lDQWdCTztZQUVQLE1BQU0sRUFBRTtnQkFDTix5QkFBeUI7Z0JBQ3pCLDBFQUEwRTtnQkFDMUUsbUNBQW1DO2dCQUNuQyw4REFBOEQ7Z0JBQzlELHFFQUFxRTtnQkFDckUsdUZBQXVGO2dCQUN2Rix1RUFBdUU7Z0JBQ3ZFLDRCQUE0QjtnQkFDNUIsaUNBQWlDO2FBQ2xDO1NBQ0YsQ0FBQzs7T0FDVyxlQUFlLENBOEUzQjtJQUFELHNCQUFDO0NBQUEsQUE5RUQsSUE4RUM7QUE5RVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2l6YXJkU3RlcENvbXBvbmVudCB9IGZyb20gJy4vd2l6YXJkLXN0ZXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS13aXphcmQnLFxuICB0ZW1wbGF0ZTpcbiAgYDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LWp1c3RpZmllZFwiPlxuICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiICpuZ0Zvcj1cImxldCBzdGVwIG9mIHN0ZXBzXCIgW25nQ2xhc3NdPVwieydhY3RpdmUnOiBzdGVwLmlzQWN0aXZlLCAnZW5hYmxlZCc6ICFzdGVwLmlzRGlzYWJsZWQsICdkaXNhYmxlZCc6IHN0ZXAuaXNEaXNhYmxlZCwgJ2NvbXBsZXRlZCc6IGlzQ29tcGxldGVkfVwiPlxuICAgICAgICAgIDxhIChjbGljayk9XCJnb1RvU3RlcChzdGVwKVwiPnt7c3RlcC50aXRsZX19PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ibG9ja1wiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlclwiIFtoaWRkZW5dPVwiaXNDb21wbGV0ZWRcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBmbG9hdC1sZWZ0XCIgKGNsaWNrKT1cInByZXZpb3VzKClcIiBbaGlkZGVuXT1cIiFoYXNQcmV2U3RlcCB8fCAhYWN0aXZlU3RlcC5zaG93UHJldlwiPlByZXZpb3VzPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgZmxvYXQtcmlnaHRcIiAoY2xpY2spPVwibmV4dCgpXCIgW2Rpc2FibGVkXT1cIiFhY3RpdmVTdGVwLmlzVmFsaWRcIiBbaGlkZGVuXT1cIiFoYXNOZXh0U3RlcCB8fCAhYWN0aXZlU3RlcC5zaG93TmV4dFwiPk5leHQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBmbG9hdC1yaWdodFwiIChjbGljayk9XCJjb21wbGV0ZSgpXCIgW2Rpc2FibGVkXT1cIiFhY3RpdmVTdGVwLmlzVmFsaWRcIiBbaGlkZGVuXT1cImhhc05leHRTdGVwXCI+RG9uZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5gXG4gICxcbiAgc3R5bGVzOiBbXG4gICAgJy5jYXJkIHsgaGVpZ2h0OiAxMDAlOyB9JyxcbiAgICAnLmNhcmQtaGVhZGVyIHsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgcGFkZGluZzogMDsgZm9udC1zaXplOiAxLjI1cmVtOyB9JyxcbiAgICAnLmNhcmQtYmxvY2sgeyBvdmVyZmxvdy15OiBhdXRvOyB9JyxcbiAgICAnLmNhcmQtZm9vdGVyIHsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgYm9yZGVyLXRvcDogMCBub25lOyB9JyxcbiAgICAnLm5hdi1pdGVtIHsgcGFkZGluZzogMXJlbSAwcmVtOyBib3JkZXItYm90dG9tOiAwLjVyZW0gc29saWQgI2NjYzsgfScsXG4gICAgJy5hY3RpdmUgeyBmb250LXdlaWdodDogYm9sZDsgY29sb3I6IGJsYWNrOyBib3JkZXItYm90dG9tLWNvbG9yOiAjMTk3NkQyICFpbXBvcnRhbnQ7IH0nLFxuICAgICcuZW5hYmxlZCB7IGN1cnNvcjogcG9pbnRlcjsgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiKDg4LCAxNjIsIDIzNCk7IH0nLFxuICAgICcuZGlzYWJsZWQgeyBjb2xvcjogI2NjYzsgfScsXG4gICAgJy5jb21wbGV0ZWQgeyBjdXJzb3I6IGRlZmF1bHQ7IH0nXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgV2l6YXJkQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBDb250ZW50Q2hpbGRyZW4oV2l6YXJkU3RlcENvbXBvbmVudClcbiAgd2l6YXJkU3RlcHM6IFF1ZXJ5TGlzdDxXaXphcmRTdGVwQ29tcG9uZW50PjtcblxuICBwcml2YXRlIF9zdGVwczogQXJyYXk8V2l6YXJkU3RlcENvbXBvbmVudD4gPSBbXTtcbiAgcHJpdmF0ZSBfaXNDb21wbGV0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgb25TdGVwQ2hhbmdlZDogRXZlbnRFbWl0dGVyPFdpemFyZFN0ZXBDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxXaXphcmRTdGVwQ29tcG9uZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMud2l6YXJkU3RlcHMuZm9yRWFjaChzdGVwID0+IHRoaXMuX3N0ZXBzLnB1c2goc3RlcCkpO1xuICAgIHRoaXMuc3RlcHNbMF0uaXNBY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgZ2V0IHN0ZXBzKCk6IEFycmF5PFdpemFyZFN0ZXBDb21wb25lbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5fc3RlcHMuZmlsdGVyKHN0ZXAgPT4gIXN0ZXAuaGlkZGVuKTtcbiAgfVxuXG4gIGdldCBpc0NvbXBsZXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNDb21wbGV0ZWQ7XG4gIH1cblxuICBnZXQgYWN0aXZlU3RlcCgpOiBXaXphcmRTdGVwQ29tcG9uZW50IHtcbiAgICByZXR1cm4gdGhpcy5zdGVwcy5maW5kKHN0ZXAgPT4gc3RlcC5pc0FjdGl2ZSk7XG4gIH1cblxuICBzZXQgYWN0aXZlU3RlcChzdGVwOiBXaXphcmRTdGVwQ29tcG9uZW50KSB7XG4gICAgaWYgKHN0ZXAgIT09IHRoaXMuYWN0aXZlU3RlcCAmJiAhc3RlcC5pc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLmFjdGl2ZVN0ZXAuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIHN0ZXAuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5vblN0ZXBDaGFuZ2VkLmVtaXQoc3RlcCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBhY3RpdmVTdGVwSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zdGVwcy5pbmRleE9mKHRoaXMuYWN0aXZlU3RlcCk7XG4gIH1cblxuICBnZXQgaGFzTmV4dFN0ZXAoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlU3RlcEluZGV4IDwgdGhpcy5zdGVwcy5sZW5ndGggLSAxO1xuICB9XG5cbiAgZ2V0IGhhc1ByZXZTdGVwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZVN0ZXBJbmRleCA+IDA7XG4gIH1cblxuICBwdWJsaWMgZ29Ub1N0ZXAoc3RlcDogV2l6YXJkU3RlcENvbXBvbmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0NvbXBsZXRlZCkge1xuICAgICAgdGhpcy5hY3RpdmVTdGVwID0gc3RlcDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmV4dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5oYXNOZXh0U3RlcCkge1xuICAgICAgbGV0IG5leHRTdGVwOiBXaXphcmRTdGVwQ29tcG9uZW50ID0gdGhpcy5zdGVwc1t0aGlzLmFjdGl2ZVN0ZXBJbmRleCArIDFdO1xuICAgICAgdGhpcy5hY3RpdmVTdGVwLm9uTmV4dC5lbWl0KCk7XG4gICAgICBuZXh0U3RlcC5pc0Rpc2FibGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmFjdGl2ZVN0ZXAgPSBuZXh0U3RlcDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcHJldmlvdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaGFzUHJldlN0ZXApIHtcbiAgICAgIGxldCBwcmV2U3RlcDogV2l6YXJkU3RlcENvbXBvbmVudCA9IHRoaXMuc3RlcHNbdGhpcy5hY3RpdmVTdGVwSW5kZXggLSAxXTtcbiAgICAgIHRoaXMuYWN0aXZlU3RlcC5vblByZXYuZW1pdCgpO1xuICAgICAgcHJldlN0ZXAuaXNEaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5hY3RpdmVTdGVwID0gcHJldlN0ZXA7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNvbXBsZXRlKCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlU3RlcC5vbkNvbXBsZXRlLmVtaXQoKTtcbiAgICB0aGlzLl9pc0NvbXBsZXRlZCA9IHRydWU7XG4gIH1cblxufVxuIl19