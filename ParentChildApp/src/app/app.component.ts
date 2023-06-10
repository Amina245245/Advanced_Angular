import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ParentChildApp';
  enterName="Naaja"
  parentData="";
  enterLastName="fousy"
  parentLastName="";
  value="";

  transferData(){
    this.parentData=this.enterName;
  }
  transferLastName()
  {
    this.parentLastName=this.enterLastName;
  }


  sendData(value: string)
  {
    this.value=value;
  }
//   sendData()
//   {
//     this.value= this.value }
// }
sum=0;
 
  value1=0;
  sendData1(value1: number){
    this.sum=value1;
  }
  
  sendData2(value1:number){
    this.sum=this.sum+value1;
  }
}