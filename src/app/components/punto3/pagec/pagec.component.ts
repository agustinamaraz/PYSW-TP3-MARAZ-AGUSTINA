import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagec',
  templateUrl: './pagec.component.html',
  styleUrls: ['./pagec.component.css']
})
export class PagecComponent implements OnInit {
  signs:Array<any>;
  constructor() { 
    this.signs = [
      {name:'leo',img:'team5.jpg'},
      {name:'aries',img:'team5.jpg'},
      {name:'sagitario',img:'team5.jpg'},
      {name:'acuario',img:'team5.jpg'},
      {name:'tauro',img:'team5.jpg'},
      {name:'geminis',img:'team5.jpg'},
      {name:'libra',img:'team5.jpg'},
      {name:'escorpio',img:'team5.jpg'},
      {name:'cancer',img:'team5.jpg'}
    ]
  }

  ngOnInit(): void {
  }

}
