import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  @Output() public sendData=new EventEmitter<string>();
  receivemessage(){
    this.sendData.emit('This is for UST Batch 4');
  // ngOnInit(){
  //   this.sendData.emit('This is child Data');
  // }
}

@Output() public sendData1=new EventEmitter<number>();
send(){
  this.sendData1.emit(5);
}
@Output() public sendData2=new EventEmitter<number>();
send2(){
  this.sendData2.emit(10);
}
}
