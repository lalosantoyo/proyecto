import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';
import { Progress } from "ui/progress";



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
    public progressValue: number;

    ngOnInit(): void {
     
            setInterval(() => {
                if(this.progressValue <25){
                this.progressValue += 7;
                }
            }, 200);
        }
    
        onValueChanged(args) {
            let progressBar = <Progress>args.object;
    
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

    }
   
}