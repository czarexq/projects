let number = document.getElementById("question_number");
let question = document.getElementById("question");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let test = document.getElementById("test");
let score = document.getElementById("score");

if (+number.innerText == 1) {
  question.innerText = "1. What does HTML stand for?";
  button1.innerText = "HighText Machine Language";
  button2.innerText = "HyperText Markup Language";
  button3.innerText = "Hyperlink and Text Management";
  button4.innerText = "Home Tool Markup Language";
  if(button2.onclick) {
    score 
  }
}

function second_qestion() {
  question.innerText = "2. What does HTML stand for?";
  button1.innerText = "HighText Machine Language";
  button2.innerText = "HyperText Markup Language";
  button3.innerText = "Hyperlink and Text Management";
  button4.innerText = "Home Tool Markup Language";
}

function third_question() {
  question.innerText = "3. What is the main purpose of CSS?";
  button1.innerText = "To create logic and functions";
  button2.innerText = "To manage databases";
  button3.innerText = "To style and layout web pages";
  button4.innerText = "To send emails from a server";
}






  function one(){
    number.innerText = +number.innerText + 1 ;
    if(+number.innerText == 2) {
      second_qestion()
    }
    if(+number.innerText == 3) {
      third_question()
    }
  }

function two() {
    number.innerText = +number.innerText + 1 ;
    if(+number.innerText == 2) {
      second_qestion()
      score.innerText = +score.innerText + 1
    }
    if(+number.innerText == 3) {
      third_question()
    }

  }

function three() {
    number.innerText = +number.innerText + 1 ;
    if(+number.innerText == 2) {
      second_qestion()
    }
    if(+number.innerText == 3) {
      third_question()
    }
  }  

function four() {
    number.innerText = +number.innerText + 1 ;
    if(+number.innerText == 2) {
      first_question()
    }
    if(+number.innerText == 3) {
      third_question()
    }
  } 