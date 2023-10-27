import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataPassService } from '../data-pass.service';

@Component({
  selector: 'app-box-one',
  templateUrl: './box-one.component.html',
  styleUrls: ['./box-one.component.css'], 
  providers: [DataPassService]
})
export class BoxOneComponent {
  heading: string | undefined;
  inputTextOne: string | undefined;

constructor(private dataPassService: DataPassService) { 
  this.heading = this.dataPassService.getData();
}


onSendOne() {
  this.dataPassService.setData(this.inputTextOne);
}


}
