import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataPassService } from '../data-pass.service';

@Component({
  selector: 'app-box-two',
  templateUrl: './box-two.component.html',
  styleUrls: ['./box-two.component.css']
})
export class BoxTwoComponent {
  @Input() heading: string | undefined;
  @Output() headingChangeTwo = new EventEmitter<string>();
  inputTextTwo: string | undefined;


  constructor(private dataPassService: DataPassService) {
  }
  onSendTwo() {
    this.dataPassService.setData(this.inputTextTwo);
    this.headingChangeTwo.emit(this.inputTextTwo);
  }
}
