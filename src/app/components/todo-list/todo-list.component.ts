import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Item } from 'src/app/models/item';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  model = new Item();

  allItems : Item[] = [];


  constructor( private data: DataService ) { 
    this.allItems = data.itemList; 
  }

  saveItem(){

    this.data.saveItem(this.model);

    console.log( this.data.itemList);

    // clear input form
    this.model = new Item();     


  }



  ngOnInit() {
  }
}
