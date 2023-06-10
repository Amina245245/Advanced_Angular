import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'childparent';
  counter=0
  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }
}
