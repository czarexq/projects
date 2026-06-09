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
let ai_rock_img = document.getElementById("rock_ai_img")
let ai_paper_img = document.getElementById("paper_ai_img")
let ai_scissors_img = document.getElementById("scissors_ai_img")
let chosen_rock = document.getElementById("chosen_rock")
let chosen_paper = document.getElementById("chosen_paper")
let chosen_scissors = document.getElementById("chosen_scissors")

chosen_rock.style.display = "none"
chosen_paper.style.display = "none"
chosen_scissors.style.display = "none"
ai_paper_img.style.display = "none"
ai_scissors_img.style.display = "none"
ai_rock_img.style.display = "none"


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
    ai_paper_img.style.display = "none"
    ai_scissors_img.style.display = "none"
    ai_rock_img.style.display = "inline"
  }
  else if (ai_choice == "paper") {
    ai_paper_img.style.display = "inline"
    ai_scissors_img.style.display = "none"
    ai_rock_img.style.display = "none"
  }
  else {
    ai_paper_img.style.display = "none"
    ai_scissors_img.style.display = "inline"
    ai_rock_img.style.display = "none"
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

  if (object == "rock") {
    chosen_rock.style.display = "inline"
    chosen_paper.style.display = "none"
    chosen_scissors.style.display = "none"
  }
  else if (object == "paper") {
    chosen_rock.style.display = "none"
    chosen_paper.style.display = "inline"
    chosen_scissors.style.display = "none"
  }
  else if (object == "scissors") {
    chosen_rock.style.display = "none"
    chosen_paper.style.display = "none"
    chosen_scissors.style.display = "inline"
  }
}