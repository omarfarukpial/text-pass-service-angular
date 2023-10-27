import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataPassService } from '../data-pass.service';

@Component({
  selector: 'app-box-two',
  templateUrl: './box-two.component.html',
  styleUrls: ['./box-two.component.css'], 
  providers: [DataPassService]
})
export class BoxTwoComponent {
  heading: string | undefined;
  inputTextTwo: string | undefined;

  constructor(private dataPassService: DataPassService) {
    this.heading = this.dataPassService.getData();
  }
  onSendTwo() {
    this.dataPassService.setData(this.inputTextTwo);
  }
}
