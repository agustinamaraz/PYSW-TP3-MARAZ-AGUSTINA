import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagea',
  templateUrl: './pagea.component.html',
  styleUrls: ['./pagea.component.css']
})
export class PageaComponent implements OnInit {
  cards:Array<any>;

  constructor() { 
    this.cards = [
      {title: 'DONDE QUIERO ESTAR', artist: 'QUEVEDO', img: 'team5.jpg'},
      {title: 'TQG', artist: 'KAROL G, Shakira', img: 'team5.jpg'},
      {title: 'Bellodrama', artist: 'Ana Mena', img: 'team5.jpg'},
      {title: 'TAMO EN NOTA', artist: 'Rauw Alejandro ft. Angel Dior', img: 'team5.jpg'},
      {title: 'Tormenta', artist: 'Gorillaz', img: 'team5.jpg'},
      {title: 'EPIC SOLETE', artist: 'THE TYETS', img: 'team5.jpg'}
    ]
  }

  ngOnInit(): void {
  }

}
