import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  fahrenheit = 0.0;
  celcius = 0.0;



  constructor() { }

  ngOnInit(): void {
  }


  convertToC(){
    this.celcius = (this.fahrenheit - 32) * 5/9;
  }

  convertToF(){
    this.fahrenheit = (this.celcius * 9/5) + 32;
  }

}
