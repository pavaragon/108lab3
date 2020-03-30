import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ERP';

  constructor(){
    console.log("hello im the constructor");

    var name= "Pavel Aragon";
    var age= 99;
    var found= false;
    var list= [];

    this.hello("test");
  }

  hello(name){
    console.log(name)
  }

  something(){
    console.log("button clicked");
    this.title = "This is the new Title";
  }


}
