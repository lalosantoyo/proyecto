import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';



@Component({
    selector: "ns-splash",
    moduleId: module.id,
    templateUrl: "./splash.component.html",
})
export class SplashComponent {
    

    
    public loadingText: string = 'Loading';

    private timeSplash = 0;
    private count = 0;
    constructor(private nav: RouterExtensions) {}

    ngOnInit(): void {

        setInterval(() => {
            if(this.timeSplash < 8000) {
                this.timeSplash += 400;
                if(this.count === 3) {
                    this.count = 0;
                    this.loadingText = 'Loading';
                } else {
                    this.loadingText += '.';
                    this.count++;
                }
            } else {
                this.nav.navigate(['/log'], { clearHistory: true });
            }
        }, 400);
    }
}