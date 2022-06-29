import { Component, Input, OnChanges, OnInit } from "@angular/core";


@Component({
    selector : 'pm-star',
    templateUrl : './star.component.html',
    styleUrls: ['./star.component.css'],
})

export class StarComponent implements OnChanges {
    cropWidth : number = 75;
    @Input() rating : number = 4;
    
    ngOnChanges(): void {
        this.cropWidth =  ( this.rating * 75 )  / 5; 
        console.log(this.cropWidth);
    }

}