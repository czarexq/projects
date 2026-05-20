const display = document.getElementById('view');

function calculate(number) {
  display.value += number
}

function calculate_all() {
  try {
    display.value = eval(display.value)
  }
  catch(error) {
    display.value = 'Error';
  }
  
}
function clear_all() {
    display.value = "";
}