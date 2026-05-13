let number = document.getElementById("question_number");
let question = document.getElementById("question");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let test = document.getElementById("test");

function second_qestion() {
  question.innerText = "2. What does HTML stand for?";
  button1.innerText = "HighText Machine Language";
  button2.innerText = "HyperText Markup Language";
  button3.innerText = "Hyperlink and Text Management";
  button4.innerText = "Home Tool Markup Language";
}

function first_question() {
  question.innerText = "2. What does HTML stand for?";
  button1.innerText = "HighText Machine Language";
  button2.innerText = "HyperText Markup Language";
  button3.innerText = "Hyperlink and Text Management";
  button4.innerText = "Home Tool Markup Language";
}




if (+number.innerText == 1) {
  question.innerText = "1. What does HTML stand for?";
  button1.innerText = "HighText Machine Language";
  button2.innerText = "HyperText Markup Language";
  button3.innerText = "Hyperlink and Text Management";
  button4.innerText = "Home Tool Markup Language";
}



  function one(){
    number.innerText = +number.innerText + 1 ;
    if(+number.innerText == 2) {
      second_qestion()
    }
  }

function two() {
    number.innerText = +number.innerText + 1 ;
    if(+number.innerText == 2) {
      second_qestion()
      score +=1
    }
    else if(+number.innerText == 3) {
      second_qestion()
      score +=1
    }
  }

function three() {
    number.innerText = +number.innerText + 1 ;
    if(+number.innerText == 2) {
      second_qestion()
    }
  }  

function four() {
    number.innerText = +number.innerText + 1 ;
    if(+number.innerText == 2) {
      first_question()
    }
  } 