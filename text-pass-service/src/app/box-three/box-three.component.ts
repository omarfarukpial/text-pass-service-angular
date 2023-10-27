import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataPassService } from '../data-pass.service';

@Component({
  selector: 'app-box-three',
  templateUrl: './box-three.component.html',
  styleUrls: ['./box-three.component.css'], 
  providers: [DataPassService]
})
export class BoxThreeComponent {
  heading: string | undefined;
  inputTextThree: string | undefined;


  constructor(private dataPassService: DataPassService) {
    this.heading = this.dataPassService.getData();
  }
  onSendThree() {
    this.dataPassService.setData(this.inputTextThree);
    console.log(this.heading);
    
  }
}
