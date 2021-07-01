import { Component, KeyValueDiffers, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  key1: string = '';
  key2: string = '';
  operator: string = '';
  result: string = '';

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.keyAdded.subscribe((val: string) => {
      if (val == '+' || val == '-' || val == '*' || val == '/') {
        this.operator = val;
      } else if (!this.operator && val !== '=' && val !== 'C') {
        this.key1 = this.key1 + val;
      } else if (this.operator && val !== '=' && val !== 'C') {
        this.key2 = this.key2 + val;
      } else if (val == '=') {
        this.result = this.appService.calculation(
          this.key1,
          this.key2,
          this.operator
        );
      } else if (val == 'C') {
          this.key1 = '';
          this.key2 = '';
          this.result = '';
          this.operator = '';
          console.log('here');
      } else if (this.operator == val) {
        this.key1 = this.result;
        this.key2 = '';
        console.log('here');
      }
    });
  }
}
