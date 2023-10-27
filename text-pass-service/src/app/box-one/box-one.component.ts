import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataPassService } from '../data-pass.service';

@Component({
  selector: 'app-box-one',
  templateUrl: './box-one.component.html',
  styleUrls: ['./box-one.component.css']
})
export class BoxOneComponent {
  @Input() heading: string | undefined;
  @Output() headingChangeOne = new EventEmitter<string>();
  inputTextOne: string | undefined;

constructor(private dataPassService: DataPassService) { 
}


onSendOne() {
  this.dataPassService.setData(this.inputTextOne);
  this.headingChangeOne.emit(this.inputTextOne);
}


}
