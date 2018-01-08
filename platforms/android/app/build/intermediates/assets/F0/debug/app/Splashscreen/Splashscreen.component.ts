import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';



@Component({
    selector: "ns-splah-screen",
    moduleId: module.id,
    templateUrl: "./splash-screen.component.html",
})
export class SlashScreenComponent implements OnInit{
    public cargandotext:string = 'Cargando';
    private timeSplah=0;
    private count=0;
    constructor(private nav:RouterExtensions) {}
    ngOnInit(): void {
       setInterval(()=>{
           if(this.timeSplah<300){
               this.timeSplah+=400;
               if(this.count===3){
                   this.count=0;
                   this.cargandotext='Cargando';
               }else{
                   this.cargandotext+='.';
                   this.count++;
               }
           }else{
               this.nav.navigate(['/log'], {clearHistory:true});
           }
       }

       )
    }
    

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.

    }
