import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataPassService } from '../data-pass.service';

@Component({
  selector: 'app-box-three',
  templateUrl: './box-three.component.html',
  styleUrls: ['./box-three.component.css']
})
export class BoxThreeComponent {
  @Input() heading: string | undefined;
  @Output() headingChangeThree = new EventEmitter<string>();
  inputTextThree: string | undefined;



  constructor(private dataPassService: DataPassService) {
  }
  onSendThree() {
    this.dataPassService.setData(this.inputTextThree); 
    this.headingChangeThree.emit(this.inputTextThree);
  }
}
