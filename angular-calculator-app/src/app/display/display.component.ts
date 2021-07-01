import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  keys: string|undefined;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    // this.keys = this.appService.onkeyValueAdded();
    this.appService.keyAdded.subscribe(
      (keyValue: string) => {
        console.log('in shere')
        this.keys = keyValue;
      }
    )
   
  }

}
