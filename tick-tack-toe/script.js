let first_button = document.getElementById("button_1");
let second_button = document.getElementById("button_2");
let third_button = document.getElementById("button_3");
let fourth_button = document.getElementById("button_4");
let fifth_button = document.getElementById("button_5");
let sixth_button = document.getElementById("button_6");
let seventh_button = document.getElementById("button_7");
let eight_button = document.getElementById("button_8");
let ninth_button = document.getElementById("button_9");
let win_info = document.getElementById("Win_info");
let round = document.getElementById("round");
let Player_one_score = document.getElementById("Player_one_score");
let Player_two_score = document.getElementById("Player_two_score");
let turn = 0;
let round_num = 0;

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function round_calc() {

  if (round_num %2 == 0) {
    round.innerHTML = "Player 1 turn"
  }
  else {
    round.innerText = "Player 2 turn"
  };
}
function round_calc_win() {
  if (round_num %2 == 0) {
    Player_one_score.innerHTML += 1;
    first_button.innerText = "";
    second_button.innerText = ""; 
    third_button.innerText = ""; 
    fourth_button.innerText = "";
    fifth_button.innerText = "";
    sixth_button.innerText = "";   
    seventh_button.innerText = ""; 
    eight_button.innerText = ""; 
    ninth_button.innerText = "";
    win_info.innerText = "Round result:";
  }
  else {
    Player_two_score.innerText += 1;
    first_button.innerText = "";
    second_button.innerText = ""; 
    third_button.innerText = ""; 
    fourth_button.innerText = "";
    fifth_button.innerText = "";
    sixth_button.innerText = "";   
    seventh_button.innerText = ""; 
    eight_button.innerText = ""; 
    ninth_button.innerText = "";
    win_info.innerText = "Round result:";
  }
}







function check_win() {
  if (
    first_button.innerText != "" && second_button.innerText != "" && third_button.innerText != "" && 
    fourth_button.innerText != "" && fifth_button.innerText != "" && sixth_button.innerText != "" &&  seventh_button.innerText != "" && 
    eight_button.innerText != "" && ninth_button.innerText != "")
  {
    round_num += 1;
    round_calc();


    win_info.innerText = "Round result: Tie"
  delay(2000).then(() => {
    first_button.innerText = "";
    second_button.innerText = ""; 
    third_button.innerText = ""; 
    fourth_button.innerText = "";
    fifth_button.innerText = "";
    sixth_button.innerText = "";   
    seventh_button.innerText = ""; 
    eight_button.innerText = ""; 
    ninth_button.innerText = "";
    win_info.innerText = "Round result:";
    
    });
  }



  else if (first_button.innerHTML == "o" && second_button.innerHTML == "o" && third_button.innerHTML == "o") {
    round_num += 1;
    first_button.style.color = "red";
    second_button.style.color = "red";
    third_button.style.color = "red";
    first_button.style.fontSize = "40px"
    second_button.style.fontSize = "40px"
    third_button.style.fontSize = "40px"
    console.log("win");
    round_calc_win()

  }
  else if (first_button.innerHTML == "o" && fourth_button.innerHTML == "o" && seventh_button.innerHTML == "o") {
    round_num += 1;
    first_button.style.color = "red";
    fourth_button.style.color = "red";
    seventh_button.style.color = "red";
    first_button.style.fontSize = "60px"
    fourth_button.style.fontSize = "60px"
    seventh_button.style.fontSize = "60px"
    console.log("win");

  }
  else if (first_button.innerHTML == "o" && fifth_button.innerHTML == "o" && ninth_button.innerHTML == "o") {
    round_num += 1;
    first_button.style.color = "red";
    fifth_button.style.color = "red";
    ninth_button.style.color = "red";
    first_button.style.fontSize = "60px"
    fifth_button.style.fontSize = "60px"
    ninth_button.style.fontSize = "60px"
    console.log("win");

  }
  else if (fourth_button.innerHTML == "o" && fifth_button.innerHTML == "o" && sixth_button.innerHTML == "o") {
    round_num += 1;
    fourth_button.style.color = "red";
    fifth_button.style.color = "red";
    sixth_button.style.color = "red";
    fourth_button.style.fontSize = "60px"
    fifth_button.style.fontSize = "60px"
    sixth_button.style.fontSize = "60px"
    console.log("win");

  }
  else if (seventh_button.innerHTML == "o" && eight_button.innerHTML == "o" && ninth_button.innerHTML == "o") {
    round_num += 1;
    seventh_button.style.color = "red";
    eight_button.style.color = "red";
    ninth_button.style.color = "red";
    seventh_button.style.fontSize = "60px"
    eight_button.style.fontSize = "60px"
    ninth_button.style.fontSize = "60px"
    console.log("win");

  }
  else if (second_button.innerHTML == "o" && fifth_button.innerHTML == "o" && eight_button.innerHTML == "o") {
    round_num += 1;
    second_button.style.color = "red";
    fifth_button.style.color = "red";
    eight_button.style.color = "red";
    second_button.style.fontSize = "60px"
    fifth_button.style.fontSize = "60px"
    eight_button.style.fontSize = "60px"
    console.log("win");

  }
  else if (third_button.innerHTML == "o" && sixth_button.innerHTML == "o" && ninth_button.innerHTML == "o") {
    round_num += 1;
    sixth_button.style.color = "red";
    ninth_button.style.color = "red";
    third_button.style.fontSize = "60px"
    sixth_button.style.fontSize = "60px"
    ninth_button.style.fontSize = "60px"
    console.log("win");

  }
  else if (third_button.innerHTML == "o" && fifth_button.innerHTML == "o" && seventh_button.innerHTML == "o") {
    round_num += 1;
    third_button.style.color = "red";
    fifth_button.style.color = "red";
    seventh_button.style.color = "red";
    third_button.style.fontSize = "60px"
    fifth_button.style.fontSize = "60px"
    seventh_button.style.fontSize = "60px"
    console.log("win");
    round_calc_win(); 
  }
  else if (first_button.innerHTML == "x" && second_button.innerHTML == "x" && third_button.innerHTML == "x") {
    round_num += 1;
    first_button.style.color = "red";
    second_button.style.color = "red";
    third_button.style.color = "red";
    first_button.style.fontSize = "60px"
    second_button.style.fontSize = "60px"
    third_button.style.fontSize = "60px"
    console.log("win");

  }
  else if (first_button.innerHTML == "x" && fourth_button.innerHTML == "x" && seventh_button.innerHTML == "x") {
    round_num += 1;
    first_button.style.color = "red";
    fourth_button.style.color = "red";
    seventh_button.style.color = "red";
    first_button.style.fontSize = "60px"
    fourth_button.style.fontSize = "60px"
    seventh_button.style.fontSize = "60px"
    console.log("win");

  }
  else if (first_button.innerHTML == "x" && fifth_button.innerHTML == "x" && ninth_button.innerHTML == "x") {
    round_num += 1;
    first_button.style.color = "red";
    fifth_button.style.color = "red";
    ninth_button.style.color = "red";
    first_button.style.fontSize = "60px"
    fifth_button.style.fontSize = "60px"
    ninth_button.style.fontSize = "60px"
    console.log("win");

  }
  else if (fourth_button.innerHTML == "x" && fifth_button.innerHTML == "x" && sixth_button.innerHTML == "x") {
    round_num += 1;
    fourth_button.style.color = "red";
    fifth_button.style.color = "red";
    sixth_button.style.color = "red";
    fourth_button.style.fontSize = "60px"
    fifth_button.style.fontSize = "60px"
    sixth_button.style.fontSize = "60px"
    console.log("win");

  }
  else if (seventh_button.innerHTML == "x" && eight_button.innerHTML == "x" && ninth_button.innerHTML == "x") {
    round_num += 1;
    seventh_button.style.color = "red";
    eight_button.style.color = "red";
    ninth_button.style.color = "red";
    seventh_button.style.fontSize = "60px"
    eight_button.style.fontSize = "60px"
    ninth_button.style.fontSize = "60px"
    console.log("win");

  }
  else if (second_button.innerHTML == "x" && fifth_button.innerHTML == "x" && eight_button.innerHTML == "x") {
    round_num += 1;
    second_button.style.color = "red";
    fifth_button.style.color = "red";
    eight_button.style.color = "red";
    second_button.style.fontSize = "60px"
    fifth_button.style.fontSize = "60px"
    eight_button.style.fontSize = "60px"
    console.log("win");

  }
  else if (third_button.innerHTML == "x" && sixth_button.innerHTML == "x" && ninth_button.innerHTML == "x") {
    round_num += 1;
    third_button.style.color = "red";
    sixth_button.style.color = "red";
    ninth_button.style.color = "red";
    third_button.style.fontSize = "60px"
    sixth_button.style.fontSize = "60px"
    ninth_button.style.fontSize = "60px"
    console.log("win");

  }
  else if (third_button.innerHTML == "x" && fifth_button.innerHTML == "x" && seventh_button.innerHTML == "x") {
    round_num += 1;
    third_button.style.color = "red";
    fifth_button.style.color = "red";
    seventh_button.style.color = "red";
    third_button.style.fontSize = "60px"
    fifth_button.style.fontSize = "60px"
    seventh_button.style.fontSize = "60px"
    console.log("win");

  }
}

function change1() {
  round_calc();
  console.log(round_num);
  if(first_button.innerText == "o" || first_button.innerText == "x" ) {
  }
  else if(turn % 2 == 0) {
    first_button.innerText = "o";
    turn++;
    check_win();
  }
  else{
    first_button.innerText = "x";
    turn++;
    check_win();
  }
}

function change2() {
  round_calc();
  if(second_button.innerText == "o" || second_button.innerText == "x" ) {
  }
  else if(turn%2 == 0) {
    second_button.innerText = "o";
    turn++;
    check_win();
  }
  else {
    second_button.innerText = "x";
    turn++;
    check_win();
  }
}

function change3() {
  round_calc();
  if(third_button.innerText == "o" || third_button.innerText == "x" ) {
  }
  else if(turn%2 == 0) {
    third_button.innerText = "o";
    turn++;
    check_win();
  }
  else {
    third_button.innerText = "x";
    turn++;
    check_win();
  }
}

function change4() {
  round_calc();
  if(fourth_button.innerText == "o" || fourth_button.innerText == "x" ) {
  }
  else if(turn%2 == 0) {
    fourth_button.innerText = "o";
    turn++;
    check_win();
  }
  else {
    fourth_button.innerText = "x";
    turn++;
    check_win();
  }
}

function change5() {
  round_calc();
  if(fifth_button.innerText == "o" || fifth_button.innerText == "x" ) {
  }
  else if(turn%2 == 0) {
    fifth_button.innerText = "o";
    turn++;
    check_win();
  }
  else {
    fifth_button.innerText = "x";
    turn++;
    check_win();
  }
}

function change6() {
  round_calc();
  if(sixth_button.innerText == "o" || sixth_button.innerText == "x" ) {
  }
  else if(turn%2 == 0) {
    sixth_button.innerText = "o";
    turn++;
    check_win();
  }
  else {
    sixth_button.innerText = "x";
    turn++;
    check_win();
  }
}

function change7() {
  round_calc();
  if(seventh_button.innerText == "o" || seventh_button.innerText == "x" ) {
  }
  else if(turn%2 == 0) {
    seventh_button.innerText = "o";
    turn++;
    check_win();
  }
  else {
    seventh_button.innerText = "x";
    turn++;
    check_win();
  }
}

function change8() {
  round_calc();
  if(eight_button.innerText == "o" || eight_button.innerText == "x" ) {
  }
  else if(turn%2 == 0) {
    eight_button.innerText = "o";
    turn++;
    check_win();
  }
  else {
    eight_button.innerText = "x";
    turn++;
    check_win();
  }
}

function change9() {
  round_calc();
  if(ninth_button.innerText == "o" || ninth_button.innerText == "x" ) {
  }
  else if(turn%2 == 0) {
    ninth_button.innerText = "o";
    turn++;
    check_win();
  }
  else {
    ninth_button.innerText = "x";
    turn++;
    check_win();
  }
}