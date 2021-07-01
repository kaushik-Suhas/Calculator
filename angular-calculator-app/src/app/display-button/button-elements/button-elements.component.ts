import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-button-elements',
  templateUrl: './button-elements.component.html',
  styleUrls: ['./button-elements.component.css']
})
export class ButtonElementsComponent implements OnInit {
 @Input() keyValue: string | undefined;
//  @Output() keyValueAdded = new EventEmitter<string>();

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  onClick() {
    // console.log(this.keyValue)
    this.appService.keyAdded.emit(this.keyValue);

    // this.keyValueAdded.emit(this.keyValue);
  }

}
