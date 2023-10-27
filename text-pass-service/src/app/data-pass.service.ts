import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataPassService {


  private data: any = 'hello';

  setData(data: any) {
    this.data = data;
  }

  getData() {
    return this.data;
  } 

   

}
