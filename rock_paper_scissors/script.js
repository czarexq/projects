let choices = ['scissors', 'paper', 'rock']
let ai_choice = null
let rock_ai = document.getElementById('ai_rock');
let paper_ai = document.getElementById('ai_paper');
let scissors_ai = document.getElementById('ai_scissors');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

function clear() {
  rock_ai.style.backgroundColor = "white"
  paper_ai.style.backgroundColor = "white"
  scissors_ai.style.backgroundColor = "white"
  rock.style.backgroundColor = "white"
  paper.style.backgroundColor = "white"
  scissors.style.backgroundColor = "white"
}

function show_ai_choice() {
  if (ai_choice == "rock") {
    rock_ai.style.backgroundColor = "green";
  }

  else if (ai_choice == "paper") {
    paper_ai.style.backgroundColor = "green";
  }

  else {
    scissors_ai.style.backgroundColor = "green"
  }
}

function clicked(object) {
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

}