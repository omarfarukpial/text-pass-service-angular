import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataPassService {


  private data: any = "Hello";

  setData(data: any): void {
    this.data = data;  
  }

  getData() {
    return this.data;
  } 

   

}
