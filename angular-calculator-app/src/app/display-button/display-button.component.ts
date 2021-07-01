import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-button',
  templateUrl: './display-button.component.html',
  styleUrls: ['./display-button.component.css']
})
export class DisplayButtonComponent implements OnInit {
  keys:string[] = ['1','2','3','+','4','5','6','-','7','8','9','*','/','0','C','='];

  constructor() { }

  ngOnInit(): void {
  }

}
