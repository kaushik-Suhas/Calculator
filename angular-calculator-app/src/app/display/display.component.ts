import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
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
  resultCheck: boolean = false;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.keyAdded.subscribe((val: string) => {
      if (val == '+' || val == '-' || val == '*' || val == '/') {
        console.log('inside')
        if(!this.key1 && val == '-'){
          console.log('here')
          this.key1 = this.key1 + val;
        } else if(!this.key2 && this.operator){
          this.result = 'Error'
          console.log('here in')
        }
        else if(this.operator) {
          this.result = this.appService.calculation(this.key1, this.key2, this.operator)
          this.key1 = this.result;
          this.result = '';
          this.operator = val;
          this.key2 = '';
        } else {
          this.operator = val;
        }
      } else if (!this.operator && val !== '=' && val !== 'C') {
        if( val == '0' ){
          if(this.key1 !== ''){
            this.key1 += val;
          }
        } else {
          this.key1 += val;
        } 
        console.log(this.key1, 'key1')
      } else if (this.operator && val !== '=' && val !== 'C') {
        this.key2 = this.key2 + val;
        console.log(this.key2, 'inside key2')
      } else if (val == '=') { console.log('in here') 
        this.result = this.appService.calculation(
          this.key1,
          this.key2,
          this.operator,  
        );
        if(this.result == '0') {
          this.resultCheck = true;
        }
      } else if (val == 'C') {
          this.key1 = '';
          this.key2 = '';
          this.result = '';
          this.operator = '';
          this.resultCheck = false;
      }
    });
  }
}
