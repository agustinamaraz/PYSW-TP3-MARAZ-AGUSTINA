import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {
  gameStart=false;
  gameOver!:boolean;
  wordList:Array<any>;
  optionList:Array<string>;
  currentWord!:any;
  currentOption!:string;
  correctAnswers!:number;
  incorrectAnswers!:number;
  currentIteration!:number;
  randomNumbers:Array<number>;

  constructor() {
    this.randomNumbers = [];
    this.wordList = [
      {name:'hoja',v:2,c:2,s:2,l:4},
      {name:'manzana',v:3,c:4,s:3,l:7},
      {name:'batalladora',v:5,c:6,s:5,l:11},
      {name:'planta',v:2,c:4,s:2,l:6},
      {name:'guitarra',v:4,c:4,s:3,l:8},
      {name:'luz',v:1,c:2,s:1,l:3},
      {name:'bandera',v:3,c:4,s:3,l:7},
      {name:'diente',v:3,c:3,s:2,l:6},
      {name:'programacion',v:5,c:7,s:4,l:12},
      {name:'cielo',v:3,c:2,s:2,l:5}
    ],
    this.optionList = ['vocales','consonantes','letras','silabas']
   }

  ngOnInit(): void {
  }

  public generateRandomNumbers(){
    for (let i = 0; i < 4; i++) {
      const num = Math.floor(Math.random() * 4);
      this.randomNumbers.push(num);
    }
  }

  public initializeGame(){
    this.currentIteration=0;
    this.gameStart=true;
    this.gameOver=false;
    this.correctAnswers=0;
    this.incorrectAnswers=0; 

    this.currentWord = this.wordList[this.currentIteration].name;
    this.currentOption = this.optionList[Math.floor(Math.random()*4)];
    this.generateRandomNumbers();
  }

  public startGame(answer:number):void{
    this.currentIteration++;

    if(this.currentIteration < 10){
      this.currentWord = this.wordList[this.currentIteration].name;
      if(this.currentOption === this.optionList[0]){
        if(answer === this.currentWord.v){
          this.correctAnswers++;
        }else{
          this.incorrectAnswers++;
        }
      }
      if(this.currentOption === this.optionList[1]){
        if(answer === this.currentWord.c){
          this.correctAnswers++;
        }else{
          this.incorrectAnswers++;
        }
      }
      if(this.currentOption === this.optionList[2]){
        if(answer === this.currentWord.l){
          this.correctAnswers++;
        }else{
          this.incorrectAnswers++;
        }
      }
      if(this.currentOption === this.optionList[3]){
        if(answer === this.currentWord.s){
          this.correctAnswers++;
        }else{
          this.incorrectAnswers++;
        }
      }
      
    }else{
      this.gameOver = true;
    }
  }

}
