import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ns-singup",
    moduleId: module.id,
    templateUrl: "./singup.component.html",
})
export class SingupComponent {
    

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor() { }

    ngOnInit(): void {
    
    }
}