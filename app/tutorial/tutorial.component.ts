import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';



@Component({
    selector: "ns-tutorial",
    moduleId: module.id,
    templateUrl: "./tutorial.component.html",
    styleUrls: ['./tutorial.component.css']})
export class TutorialComponent {


    constructor(private router : RouterExtensions ) { }

    goToSignUp(){
        this.router.navigate(['log']);
    }


    // ngOnInit(): void {
    
    // }
}