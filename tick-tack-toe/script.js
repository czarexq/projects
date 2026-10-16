let first_button = document.getElementById("button_1");
let second_button = document.getElementById("button_2");
let third_button = document.getElementById("button_3");
let fourth_button = document.getElementById("button_4");
let fifth_button = document.getElementById("button_5");
let sixth_button = document.getElementById("button_6");
let seventh_button = document.getElementById("button_7");
let eight_button = document.getElementById("button_8");
let ninth_button = document.getElementById("button_9");

let turn = 0;

function check_win() {
  if (first_button.innerHTML == "+" && second_button.innerHTML == "+" && third_button.innerHTML == "+") {
    console.log("win");
  }
  else if (first_button.innerHTML == "+" && fourth_button.innerHTML == "+" && seventh_button.innerHTML == "+") {
    console.log("win");
  }
  else if (first_button.innerHTML == "+" && fifth_button.innerHTML == "+" && ninth_button.innerHTML == "+") {
    console.log("win");
  }
  else if (fourth_button.innerHTML == "+" && fifth_button.innerHTML == "+" && sixth_button.innerHTML == "+") {
    console.log("win");
  }
  else if (seventh_button.innerHTML == "+" && eight_button.innerHTML == "+" && ninth_button.innerHTML == "+") {
    console.log("win");
  }
  else if (second_button.innerHTML == "+" && fifth_button.innerHTML == "+" && eight_button.innerHTML == "+") {
    console.log("win");
  }
  else if (third_button.innerHTML == "+" && sixth_button.innerHTML == "+" && ninth_button.innerHTML == "+") {
    console.log("win");
  }
  else if (third_button.innerHTML == "+" && fifth_button.innerHTML == "+" && seventh_button.innerHTML == "+") {
    console.log("win");
  }


  else if (first_button.innerHTML == "-" && second_button.innerHTML == "-" && third_button.innerHTML == "-") {
    console.log("win");
  }
  else if (first_button.innerHTML == "-" && fourth_button.innerHTML == "-" && seventh_button.innerHTML == "-") {
    console.log("win");
  }
  else if (first_button.innerHTML == "-" && fifth_button.innerHTML == "-" && ninth_button.innerHTML == "-") {
    console.log("win");
  }
  else if (fourth_button.innerHTML == "-" && fifth_button.innerHTML == "-" && sixth_button.innerHTML == "-") {
    console.log("win");
  }
  else if (seventh_button.innerHTML == "-" && eight_button.innerHTML == "-" && ninth_button.innerHTML == "-") {
    console.log("win");
  }
  else if (second_button.innerHTML == "-" && fifth_button.innerHTML == "-" && eight_button.innerHTML == "-") {
    console.log("win");
  }
  else if (third_button.innerHTML == "-" && sixth_button.innerHTML == "-" && ninth_button.innerHTML == "-") {
    console.log("win");
  }
  else if (third_button.innerHTML == "-" && fifth_button.innerHTML == "-" && seventh_button.innerHTML == "-") {
    console.log("win");
  }
}

function change1() {
  if(first_button.innerText == "+" || first_button.innerText == "-" ) {
  }
  else if(turn % 2 == 0) {
    first_button.innerText = "+";
    turn++;
    check_win();
  }
  else{
    first_button.innerText = "-";
    turn++;
    check_win();
  }
}
function change2() {
  if(second_button.innerText == "+" || second_button.innerText == "-" ) {
  }
  else if(turn%2 == 0) {
    second_button.innerText = "+";
    turn++;
    check_win();
  }
  else {
    second_button.innerText = "-";
    turn++;
    check_win();
  }
}
function change3() {
  if(third_button.innerText == "+" || third_button.innerText == "-" ) {
  }
  else if(turn%2 == 0) {
    third_button.innerText = "+";
    turn++;
    check_win();
  }
  else {
    third_button.innerText = "-";
    turn++;
    check_win();
  }
}
function change4() {
  if(fourth_button.innerText == "+" || fourth_button.innerText == "-" ) {
  }
  else if(turn%2 == 0) {
    fourth_button.innerText = "+";
    turn++;
    check_win();
  }
  else {
    fourth_button.innerText = "-";
    turn++;
    check_win();
  }
}
function change5() {
  if(fifth_button.innerText == "+" || fifth_button.innerText == "-" ) {
  }
  else if(turn%2 == 0) {
    fifth_button.innerText = "+";
    turn++;
    check_win();
  }
  else {
    fifth_button.innerText = "-";
    turn++;
    check_win();
  }
}

function change6() {
  if(sixth_button.innerText == "+" || sixth_button.innerText == "-" ) {
  }
  else if(turn%2 == 0) {
    sixth_button.innerText = "+";
    turn++;
    check_win();
  }
  else {
    sixth_button.innerText = "-";
    turn++;
    check_win();
  }
}

function change7() {
  if(seventh_button.innerText == "+" || seventh_button.innerText == "-" ) {
  }
  else if(turn%2 == 0) {
    seventh_button.innerText = "+";
    turn++;
    check_win();
  }
  else {
    seventh_button.innerText = "-";
    turn++;
    check_win();
  }
}

function change8() {
  if(eight_button.innerText == "+" || eight_button.innerText == "-" ) {
  }
  else if(turn%2 == 0) {
    eight_button.innerText = "+";
    turn++;
    check_win();
  }
  else {
    eight_button.innerText = "-";
    turn++;
    check_win();
  }
}

function change9() {
  if(ninth_button.innerText == "+" || ninth_button.innerText == "-" ) {
  }
  else if(turn%2 == 0) {
    ninth_button.innerText = "+";
    turn++;
    check_win();
  }
  else {
    ninth_button.innerText = "-";
    turn++;
    check_win();
  }
}