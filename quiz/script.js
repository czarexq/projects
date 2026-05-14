let number = document.getElementById("question_number");
let question = document.getElementById("question");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let score = document.getElementById("score");
let count_score = 0;

function hide() {
    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
}

if (+number.innerText == 1) {
  question.innerText = "1. What does HTML stand for?";
  button1.innerText = "HighText Machine Language";
  button2.innerText = "HyperText Markup Language";
  button3.innerText = "Hyperlink and Text Management";
  button4.innerText = "Home Tool Markup Language";
}

function second_qestion() {
  question.innerText = "2. In JavaScript, which keyword is used to declare a variable that can be changed?";
  button1.innerText = "const";
  button2.innerText = "let";
  button3.innerText = "var_change";
  button4.innerText = "fixed";
}

function third_question() {
  question.innerText = "3. What is the main purpose of CSS?";
  button1.innerText = "To create logic and functions";
  button2.innerText = "To manage databases";
  button3.innerText = "To style and layout web pages";
  button4.innerText = "To send emails from a server";
}


function one(){
  number.innerText = +number.innerText + 1;
  if(+number.innerText == 1) {
    count_score += 1
    score.innerText = count_score;
  }
  if(+number.innerText == 2) {
    second_qestion()
  }
  if(+number.innerText == 3) {
    third_question()
  }

  if(+number.innerText == 10) {
    hide()
  }
}

function two() {
    number.innerText = +number.innerText + 1;
    if(+number.innerText == 2) {
      second_qestion()
      count_score += 1
      score.innerText = count_score;
    }
    if(+number.innerText == 3) {
      third_question()
    }

    if(+number.innerText == 10) {
      hide()
    }
  }

function three() {
    number.innerText = +number.innerText + 1;
    if(+number.innerText == 2) {
      second_qestion()
    }
    if(+number.innerText == 3) {
      third_question()
    }

    if(+number.innerText == 10) {
      hide()
    }
  }  

function four() {
    number.innerText = +number.innerText + 1 ;
    if(+number.innerText == 2) {
      second_qestion()
    }
    if(+number.innerText == 3) {
      third_question()
    }

    if(+number.innerText == 10) {
      hide()
    }
  } 