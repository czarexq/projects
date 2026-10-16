let number = document.getElementById("question_number");
let question = document.getElementById("question");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let score = document.getElementById("score");
let delete_something = document.getElementById("delete");
let credits = document.getElementById("credits");
let count_score = 0;
number.innerText = +number.innerText - 1;


function hide() {
    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    button4.style.display = "none";
    number.style.display = "none";
    delete_something.innerHTML = "Well done!! You managed to finish this test, your score:" + `<br>` + "Thanks for playing!!!"
    score.innerText = count_score+"/10"
    question.innerHTML = `<img src="rizz.png" alt="rizz" width="200px" height="200px" onlick="again()"></img>`
    button5.style.display = "block";
    credits.style.display = "block";
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
  button3.innerText = "fixed";
  button4.innerText = "static";
}

function third_question() {
  question.innerText = "3. What is the main purpose of CSS?";
  button1.innerText = "To create logic";
  button2.innerText = "To manage databases";
  button3.innerText = "To style web pages";
  button4.innerText = "To send emails";
}

function fourth_question() {
  question.innerText = "4. Which Git command is used to copy a repository to your local machine?";
  button1.innerText = "git copy";
  button2.innerText = "git download";
  button3.innerText = "git push";
  button4.innerText = "git clone";
}

function fifth_question() {
  question.innerText = "5. What is a 'Boolean' in programming?";
  button1.innerText = "A type of loop";
  button2.innerText = "A data type (True/False)";
  button3.innerText = "A CSS property";
  button4.innerText = "A HTML tag";
}

function sixth_question() {
  question.innerText = "6. Which Git command moves changes to the 'Staging Area'?";
  button1.innerText = "git add";
  button2.innerText = "git commit";
  button3.innerText = "git stage-now";
  button4.innerText = "git upload";
}

function seventh_question() {
  question.innerText = "7. What does 'Dry Run' mean in coding?";
  button1.innerText = "Coding without water";
  button2.innerText = "Running on paper";
  button3.innerText = "Testing without executing";
  button4.innerText = "Deleting the code";
}

function eighth_question() {
  question.innerText = "8. In Git, what is the 'HEAD'?";
  button1.innerText = "The top line";
  button2.innerText = "The first commit";
  button3.innerText = "A pointer to current branch";
  button4.innerText = "The GitHub logo";
}

function ninth_question() {
  question.innerText = "9. What is an 'Array' used for?";
  button1.innerText = "To store multiple values";
  button2.innerText = "To connect to Wi-Fi";
  button3.innerText = "To delete folders";
  button4.innerText = "To name a variable";
}

function tenth_question() {
  question.innerText = "10. What does the 'm' stand for in: git commit -m 'Message'?";
  button1.innerText = "modify";
  button2.innerText = "main";
  button3.innerText = "move";
  button4.innerText = "message";
}

function one(){
    number.innerText = +number.innerText + 1;
    if(+number.innerText == 1) {
      second_question()
    }
    if(+number.innerText == 2) {
      third_question()
    }
    if(+number.innerText == 3) {
      fourth_question()
    }
    if(+number.innerText == 4) {
      fifth_question()
    }
    if(+number.innerText == 5) {
      sixth_question()
    }
    if(+number.innerText == 6) {
      count_score += 1;
      score.innerText = count_score;
      seventh_question()
    }
    if(+number.innerText == 7) {
      eighth_question()
    }
    if(+number.innerText == 8) {
      ninth_question()
    }
    if(+number.innerText == 9) {
      count_score += 1;
      score.innerText = count_score;
      tenth_question()
    }
    if(+number.innerText == 10) {
      number.innerText = 10
      hide()
    }
}
function two() {
    number.innerText = +number.innerText + 1;
    if(+number.innerText == 1) {
      second_question()
      count_score += 1;
      score.innerText = count_score;
    }
    if(+number.innerText == 2) {
      third_question()
      count_score += 1;
      score.innerText = count_score;
    }
    if(+number.innerText == 3) {
      fourth_question()
    }
    if(+number.innerText == 4) {
      fifth_question()
    }
    if(+number.innerText == 5) {
      count_score += 1;
      score.innerText = count_score;
      sixth_question()
    }
    if(+number.innerText == 6) {
      seventh_question()
    }
    if(+number.innerText == 7) {
      eighth_question()
    }
    if(+number.innerText == 8) {
      ninth_question()
    }
    if(+number.innerText == 9) {
      tenth_question()
    }
    if(+number.innerText == 10) {
      number.innerText = 10
      hide()
    }
  }

function three() {
    number.innerText = +number.innerText + 1;
    if(+number.innerText == 1) {
      second_question()
    }
    if(+number.innerText == 2) {
      third_question()
    }
    if(+number.innerText == 3) {
      fourth_question()
      count_score += 1;
      score.innerText = count_score;
    }
    if(+number.innerText == 4) {
      fifth_question()
    }
    if(+number.innerText == 5) {
      sixth_question()
    }
    if(+number.innerText == 6) {
      seventh_question()
    }
    if(+number.innerText == 7) {
      count_score += 1;
      score.innerText = count_score;
      eighth_question()
    }
    if(+number.innerText == 8) {
      count_score += 1;
      score.innerText = count_score;
      ninth_question()
    }
    if(+number.innerText == 9) {
      tenth_question()
    }
    if(+number.innerText == 10) {
      number.innerText = 10
      hide()
    }
  }   
function four() {
    number.innerText = +number.innerText + 1;
    if(+number.innerText == 1) {
      second_question()
    }
    if(+number.innerText == 2) {
      third_question()
    }
    if(+number.innerText == 3) {
      fourth_question()
    }
    if(+number.innerText == 4) {
      fifth_question()
      count_score += 1;
      score.innerText = count_score;
    }
    if(+number.innerText == 5) {
      sixth_question()
    }
    if(+number.innerText == 6) {
      seventh_question()
    }
    if(+number.innerText == 7) {
      eighth_question()
    }
    if(+number.innerText == 8) {
      ninth_question()
    }
    if(+number.innerText == 9) {
      tenth_question()
    }
    if(+number.innerText == 10) {
      count_score += 1;
      score.innerText = count_score;
      number.innerText = 10
      hide()
    }
}
function reset() {
  window.location.reload()
}
