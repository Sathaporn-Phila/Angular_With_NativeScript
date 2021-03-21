import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'caculator';
  num = "0";
  operand = 0;
  operator = "";
  replace = true;
  constructor() { }

  ngOnInit() {
  }

  equal() {
      if (this.operator == "+") {
          this.num = String(this.operand + Number(this.num));
      } else if (this.operator == "-") {
          this.num = String(this.operand - Number(this.num));
      } else if (this.operator == "*") {
          this.num = String(this.operand * Number(this.num));
      } else if (this.operator == "/") {
          this.num = String(this.operand / Number(this.num));
      }
      this.operator = "";
      this.replace = true;
  }
  ac() {
      this.num = "0";
      this.operand = 0;
      this.operator = "";
      this.replace = true;
  }
  clickButton(num) {
      if (String(num) == '.' && !(this.num.includes('.'))) {
          this.num += '.';
      } else if (this.replace == true) {
          this.num = String(num);
      } else if (String(num) != ".") {
          this.num += String(num);
      }
      this.replace = false;
  }
  clickOperater(op) {
      if (this.operator == "") {
          if (this.operand === 0) {
              this.operand = Number(this.num);
              this.operator = op;
              this.replace = true;
          } else {
              this.equal()
              this.operand = Number(this.num);
              this.operator = op;
              this.replace = true;
          }
      } else {
          this.operator = op;
      }
  }
}
