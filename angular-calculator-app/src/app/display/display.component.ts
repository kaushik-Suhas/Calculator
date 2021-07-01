import { Component, KeyValueDiffers, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  key1: string = '';
  key2: string = '';
  operator: string = '';
  result: number| undefined;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.keyAdded.subscribe(
      (val: string) => {
        if( val == '+' || val == '-' || val == '*' || val == '/' ) {
          this.operator = val;
        } else if (!this.operator && val !== '=' && val !== 'C') {
          this.key1 = this.key1 + val;
        } else if (this.operator && val !== '=' && val !== 'C') {
          this.key2 = this.key2 + val; 
        } else if (val == '='){
          this.result = this.appService.calculation(this.key1, this.key2, this.operator);
        } else if (val == 'C') {
          console.log('here'),
          this.key1 = '',
          this.key2 = '',
          this.result = 0;
        }
     }
)
}
}
