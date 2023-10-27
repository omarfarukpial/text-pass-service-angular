import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BoxOneComponent } from './box-one/box-one.component';
import { BoxTwoComponent } from './box-two/box-two.component';
import { BoxThreeComponent } from './box-three/box-three.component';
import { FormsModule } from '@angular/forms';
import { DataPassService } from './data-pass.service';

@NgModule({
  declarations: [
    AppComponent,
    BoxOneComponent,
    BoxTwoComponent,
    BoxThreeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule, 
    FormsModule
  ],
  providers: [DataPassService],
  bootstrap: [AppComponent]
})
export class AppModule { }
