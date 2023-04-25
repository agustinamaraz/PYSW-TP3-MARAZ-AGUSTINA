import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pageb',
  templateUrl: './pageb.component.html',
  styleUrls: ['./pageb.component.css']
})
export class PagebComponent implements OnInit {
  currencies:Array<any>;
  constructor() {
    this.currencies = [
      {name:'USD',img:'USD.png'},
      {name:'EUR',img:'eur.png'},
      {name:'GBP',img:'gb.png'}
    ]
   }

  ngOnInit(): void {
  }

}
