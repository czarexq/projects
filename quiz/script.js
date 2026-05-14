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

function first_question() {
  question.innerText = "1. What does HTML stand for?";
  button1.innerText = "HighText Machine Language";
  button2.innerText = "HyperText Markup Language";
  button3.innerText = "Hyperlink and Text Management";
  button4.innerText = "Home Tool Markup Language";
}

function second_question() {
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
function fourth_question() {
  question.innerText = "4. Which Git command is used to copy a repository from GitHub to your local machine?";
  button1.innerText = "git copy";
  button2.innerText = "git clone";
  button3.innerText = "git download";
  button4.innerText = "git pull --all";
}
function fifth_question() {
  question.innerText = "5. What is a 'Boolean' in programming?";
  button1.innerText = "A type of loop";
  button2.innerText = "A function that returns text";
  button3.innerText = "A data type that can only be True or False";
  button4.innerText = "A styling property in CSS";
}
function sixth_question() {
  question.innerText = "6. Which Git command moves your local changes to the 'Staging Area'?";
  button1.innerText = "git add";
  button2.innerText = "git stage-now";
  button3.innerText = "git commit";
  button4.innerText = "git push";
}
function seventh_question() {
  question.innerText = "7. What does 'Dry Run' mean in coding?";
  button1.innerText = "Coding without drinking water";
  button2.innerText = "Testing a process without actually executing the actions";
  button3.innerText = "Running code on a server";
  button4.innerText = "Writing code on paper";
}
function eighth_question() {
  question.innerText = "8. In Git, what is the 'HEAD'?";
  button1.innerText = "The top line of a file";
  button2.innerText = "A pointer to the current branch/commit you are working on";
  button3.innerText = "The first ever commit in a project";
  button4.innerText = "The GitHub profile administrator";
}
function ninth_question() {
  question.innerText = "9. What is an 'Array' used for?";
  button1.innerText = "To store multiple values in a single variable";
  button2.innerText = "To connect to the internet";
  button3.innerText = "To delete files permanently";
  button4.innerText = "To create a new folder";
}
function tenth_question() {
  question.innerText = "10. What does the 'm' stand for in: git commit -m 'Message'?";
  button1.innerText = "main";
  button2.innerText = "modify";
  button3.innerText = "message";
  button4.innerText = "move";
}



function one(){
    number.innerText = +number.innerText + 1;
    if(+number.innerText == 2) {
      second_qestion()
    }
    if(+number.innerText == 3) {
      third_question()
    }
    if(+number.innerText == 4) {
      fourth_question()
    }
    if(+number.innerText == 5) {
      fifth_question()
    }
    if(+number.innerText == 6) {
      sixth_question()
    }
    if(+number.innerText == 7) {
      seventh_question()
      count_score += 1;
      score.innerText = count_score;
    }
    if(+number.innerText == 8) {
      eighth_question()
    }
    if(+number.innerText == 9) {
      ninth_question()
    }
    if(+number.innerText == 10) {
      tenth_question()
      count_score += 1;
      score.innerText = count_score;
    }
    if(+number.innerText == 11) {
      number.innerText = 10
      hide()
      question.innerText = "Finished"
    }
}

function two() {
    number.innerText = +number.innerText + 1;
    if(+number.innerText == 2) {
      second_qestion()
    }
    if(+number.innerText == 3) {
      third_question()
    }
    if(+number.innerText == 4) {
      fourth_question()
    }
    if(+number.innerText == 5) {
      fifth_question()
      count_score += 1;
      score.innerText = count_score;
    }
    if(+number.innerText == 6) {
      sixth_question()
    }
    if(+number.innerText == 7) {
      seventh_question()
    }
    if(+number.innerText == 8) {
      eighth_question()
      count_score += 1;
      score.innerText = count_score;
    }
    if(+number.innerText == 9) {
      ninth_question()
      count_score += 1;
      score.innerText = count_score;
    }
    if(+number.innerText == 10) {
      tenth_question()
    }
    if(+number.innerText == 11) {
      number.innerText = 10
      hide()
      question.innerText = "Finished"
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
    if(+number.innerText == 4) {
      fourth_question()
      count_score += 1;
      score.innerText = count_score;
    }
    if(+number.innerText == 5) {
      fifth_question()
    }
    if(+number.innerText == 6) {
      sixth_question()
      count_score += 1;
      score.innerText = count_score;
    }
    if(+number.innerText == 7) {
      seventh_question()
    }
    if(+number.innerText == 8) {
      eighth_question()
    }
    if(+number.innerText == 9) {
      ninth_question()
    }
    if(+number.innerText == 10) {
      tenth_question()
    }
    if(+number.innerText == 11) {
      count_score += 1;
      score.innerText = count_score;
      number.innerText = 10
      hide()
      question.innerText = "Finished"
    }
  }  

function four() {
    number.innerText = +number.innerText + 1;
    if(+number.innerText == 2) {
      second_qestion()
    }
    if(+number.innerText == 3) {
      third_question()
    }
    if(+number.innerText == 4) {
      fourth_question()
    }
    if(+number.innerText == 5) {
      fifth_question()
    }
    if(+number.innerText == 6) {
      sixth_question()
    }
    if(+number.innerText == 7) {
      seventh_question()
    }
    if(+number.innerText == 8) {
      eighth_question()
    }
    if(+number.innerText == 9) {
      ninth_question()
    }
    if(+number.innerText == 10) {
      tenth_question()
    }
    if(+number.innerText == 11) {
      number.innerText = 10
      hide()
      question.innerText = "Finished"
    }
  } 