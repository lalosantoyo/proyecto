"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var wizard_component_1 = require("./src/wizard.component");
var wizard_step_component_1 = require("./src/wizard-step.component");
__export(require("./src/wizard.component"));
__export(require("./src/wizard-step.component"));
var FormWizardModule = (function () {
    function FormWizardModule() {
    }
    FormWizardModule_1 = FormWizardModule;
    FormWizardModule.forRoot = function () {
        return {
            ngModule: FormWizardModule_1
        };
    };
    FormWizardModule = FormWizardModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                wizard_component_1.WizardComponent,
                wizard_step_component_1.WizardStepComponent
            ],
            exports: [
                wizard_component_1.WizardComponent,
                wizard_step_component_1.WizardStepComponent
            ]
        })
    ], FormWizardModule);
    return FormWizardModule;
    var FormWizardModule_1;
}());
exports.FormWizardModule = FormWizardModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNDQUE4RDtBQUM5RCwwQ0FBK0M7QUFDL0MsMkRBQXlEO0FBQ3pELHFFQUFrRTtBQUVsRSw0Q0FBdUM7QUFDdkMsaURBQTRDO0FBZTVDO0lBQUE7SUFNQSxDQUFDO3lCQU5ZLGdCQUFnQjtJQUNwQix3QkFBTyxHQUFkO1FBQ0UsTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLGtCQUFnQjtTQUMzQixDQUFDO0lBQ0osQ0FBQztJQUxVLGdCQUFnQjtRQWI1QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AscUJBQVk7YUFDYjtZQUNELFlBQVksRUFBRTtnQkFDWixrQ0FBZTtnQkFDZiwyQ0FBbUI7YUFDcEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1Asa0NBQWU7Z0JBQ2YsMkNBQW1CO2FBQ3BCO1NBQ0YsQ0FBQztPQUNXLGdCQUFnQixDQU01QjtJQUFELHVCQUFDOztDQUFBLEFBTkQsSUFNQztBQU5ZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgV2l6YXJkQ29tcG9uZW50IH0gZnJvbSAnLi9zcmMvd2l6YXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXaXphcmRTdGVwQ29tcG9uZW50IH0gZnJvbSAnLi9zcmMvd2l6YXJkLXN0ZXAuY29tcG9uZW50JztcblxuZXhwb3J0ICogZnJvbSAnLi9zcmMvd2l6YXJkLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy93aXphcmQtc3RlcC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFdpemFyZENvbXBvbmVudCxcbiAgICBXaXphcmRTdGVwQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBXaXphcmRDb21wb25lbnQsXG4gICAgV2l6YXJkU3RlcENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1XaXphcmRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEZvcm1XaXphcmRNb2R1bGVcbiAgICB9O1xuICB9XG59XG4iXX0=