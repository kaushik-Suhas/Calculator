import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-elements',
  templateUrl: './button-elements.component.html',
  styleUrls: ['./button-elements.component.css']
})
export class ButtonElementsComponent implements OnInit {
 @Input() keyValue: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {}

}
