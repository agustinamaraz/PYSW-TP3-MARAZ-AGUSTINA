import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {
  gameStart = false;
  gameOver!: boolean;
  wordList: Array<any>;
  optionList: Array<string>;
  currentWord!: any;
  currentOption!: string;
  correctAnswers!: number;
  incorrectAnswers!: number;
  currentIteration!: number;
  randomNumbers: Array<number>;

  constructor() {
    this.randomNumbers = [];
    this.wordList = [
      { name: 'hoja', v: 2, c: 2, s: 2, l: 4 },
      { name: 'manzana', v: 3, c: 4, s: 3, l: 7 },
      { name: 'batalladora', v: 5, c: 6, s: 5, l: 11 },
      { name: 'planta', v: 2, c: 4, s: 2, l: 6 },
      { name: 'guitarra', v: 4, c: 4, s: 3, l: 8 },
      { name: 'luz', v: 1, c: 2, s: 1, l: 3 },
      { name: 'bandera', v: 3, c: 4, s: 3, l: 7 },
      { name: 'diente', v: 3, c: 3, s: 2, l: 6 },
      { name: 'programacion', v: 5, c: 7, s: 4, l: 12 },
      { name: 'cielo', v: 3, c: 2, s: 2, l: 5 }
    ],
      this.optionList = ['vocales', 'consonantes', 'letras', 'silabas']
  }

  ngOnInit(): void {
  }

  public generateRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min; //el valor maximo se excluye, o sea que solo toma la unidad anterior a ese numero (max=13 los numeros solo van a llegar hasta 12)
  }

  public generateUniqueRandomNumbers() {
    this.randomNumbers = [];
    let i = 0, num = 0;

    while (i < 4) {
      num = this.generateRandomNumber(1, 13);
      if (!(this.randomNumbers.includes(num))) {
        this.randomNumbers.push(num);
        i++;
      }
    }

    let correctAnswer=0;
    num = this.generateRandomNumber(0, 3);
    if (this.currentOption === 'vocales') {
      correctAnswer = this.wordList[this.currentIteration].v;
      if(!(this.randomNumbers.includes(correctAnswer))){
        this.randomNumbers[num] = correctAnswer;
      }
    }
    if (this.currentOption === 'consonantes') {
      correctAnswer = this.wordList[this.currentIteration].c;
      if(!(this.randomNumbers.includes(correctAnswer))){
        this.randomNumbers[num] = correctAnswer;
      }
    }
    if (this.currentOption === 'letras') {
      correctAnswer = this.wordList[this.currentIteration].l;
      if(!(this.randomNumbers.includes(correctAnswer))){
        this.randomNumbers[num] = correctAnswer;
      }
    }
    if (this.currentOption === 'silabas') {
      correctAnswer = this.wordList[this.currentIteration].s;
      if(!(this.randomNumbers.includes(correctAnswer))){
        this.randomNumbers[num] = correctAnswer;
      }
    }
  }

  public initializeGame() {
    this.currentIteration = 0;
    this.gameStart = true;
    this.gameOver = false;
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;

    this.currentWord = this.wordList[this.currentIteration].name;
    this.currentOption = this.optionList[Math.floor(Math.random() * 4)];
    this.generateUniqueRandomNumbers();
  }

  public startGame(answer: number): void {
    if (this.currentIteration < 10) {
      if (this.currentOption === this.optionList[0]) {
        if (answer === this.wordList[this.currentIteration].v) {
          this.correctAnswers++;
        } else {
          this.incorrectAnswers++;
        }
      }
      if (this.currentOption === this.optionList[1]) {
        if (answer === this.wordList[this.currentIteration].c) {
          this.correctAnswers++;
        } else {
          this.incorrectAnswers++;
        }
      }
      if (this.currentOption === this.optionList[2]) {
        if (answer === this.wordList[this.currentIteration].l) {
          this.correctAnswers++;
        } else {
          this.incorrectAnswers++;
        }
      }
      if (this.currentOption === this.optionList[3]) {
        if (answer === this.wordList[this.currentIteration].s) {
          this.correctAnswers++;
        } else {
          this.incorrectAnswers++;
        }
      }
      this.currentIteration++;

      if (this.currentIteration < 10) {
        this.currentWord = this.wordList[this.currentIteration].name;
        this.generateUniqueRandomNumbers();
      } else {
        this.gameOver = true;
      }

    } else {
      this.gameOver = true;
    }
  }

}
