import { Component } from "@angular/core";

@Component({
    selector: "ns-slider",
    moduleId: module.id,
    // >> (hide)
    // styleUrls: ["./../style.css"],
    // // << (hide)
    templateUrl: "./slider.component.html",
})
export class SliderComponent {
    protected images: Array<any> = [];

    constructor() {
        this.images = [
            {
                title: 'Image 1 (resources folder)',
                file: 'res://logo'
            }, 
        
        ];
    }
}