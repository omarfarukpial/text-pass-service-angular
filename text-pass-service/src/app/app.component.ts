import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentOneHeading: string = 'Component One';
  componentTwoHeading: string = 'Component Two';
  componentThreeHeading: string = 'Component Three';
  onHeadingChangeOne(newHeading: string) {
    this.componentTwoHeading = newHeading;
    this.componentThreeHeading = newHeading;
  }
  onHeadingChangeTwo(newHeading: string) {
    this.componentOneHeading = newHeading;
    this.componentThreeHeading = newHeading;

  }
  onHeadingChangeThree(newHeading: string) {
    this.componentOneHeading = newHeading;
    this.componentTwoHeading = newHeading;

  }
}
