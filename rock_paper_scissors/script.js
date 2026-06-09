let choices = ['scissors', 'paper', 'rock']
let ai_choice = null
let rock_ai = document.getElementById('ai_rock');
let paper_ai = document.getElementById('ai_paper');
let scissors_ai = document.getElementById('ai_scissors');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let result = document.getElementById("result");
let your_score = document.getElementById("your_score");
let ai_score = document.getElementById("ai_score");
let your_score_count = 0
let ai_score_count = 0

function clear() {
  rock_ai.style.backgroundColor = null
  paper_ai.style.backgroundColor = null
  scissors_ai.style.backgroundColor = null;
  rock.style.backgroundColor = null
  paper.style.backgroundColor = null
  scissors.style.backgroundColor = null
  result.innerText = null;
}
function win() {
  
}

function clicked(object) {
  console.log(ai_score_count)
  clear()
  let ai_choice = choices[Math.floor(Math.random()*3)]
  console.log(ai_choice)

  if (ai_choice == "rock") {
    rock_ai.style.backgroundColor = "green";
  }
  else if (ai_choice == "paper") {
    paper_ai.style.backgroundColor = "green";
  }
  else {
    scissors_ai.style.backgroundColor = "green"
  }

  if (object == "rock") {
    rock.style.backgroundColor = "green"
  }
  else if (object == "paper") {
    paper.style.backgroundColor = "green"
  }
  else{
    scissors.style.backgroundColor = "green"
  }

  if (object == ai_choice) {
    result.innerText = "It's a draw"
  }
  else if (object == "rock" && ai_choice == "scissors") {
    result.innerText = "You win"
    your_score_count += 1
    your_score.innerText = your_score_count
  }
  else if (object == "paper" && ai_choice == "rock") {
    result.innerText = "You win"
    your_score_count += 1
    your_score.innerText = your_score_count
  }
  else if (object == "scissors" && ai_choice == "paper") {
    result.innerText = "You win"
    your_score_count += 1
    your_score.innerText = your_score_count
  }
  else {
    result.innerText = "You lose"
    ai_score_count += 1
    ai_score.innerText = ai_score_count
  }
}