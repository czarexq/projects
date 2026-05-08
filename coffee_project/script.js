    const menu = document.getElementById("menu");
    const price = +document.getElementsByClassName("price")
    const cart_price = document.getElementById("cart_price")
    let cart_pics = document.getElementById('cart_pics');
    let user_money = document.getElementById("user_money");
    let feedback = document.getElementById("feedback");


    function cappuccino(cena) {
      cart_price.innerText = +cart_price.innerText + cena;
      cart_pics.innerHTML += `<img src="images/cappuccino.png" alt="pic1" width="200px" height="200px" onclick="remove()">`
    }
    function expresso(cena) {
      cart_price.innerText = +cart_price.innerText + cena;
      cart_pics.innerHTML += `<img src="images/expresso.png" alt="pic1" width="200px" height="200px">`
    }
    function latte(cena) {
      cart_price.innerText = +cart_price.innerText + cena;
      cart_pics.innerHTML += `<img src="images/latte.png" alt="pic1" width="200px" height="200px">`
    }
    function americano(cena) {
      cart_price.innerText = +cart_price.innerText + cena;
      cart_pics.innerHTML += `<img src="images/americano.png" alt="pic1" width="200px" height="200px">`
    }
    function macchiato(cena) {
      cart_price.innerText = +cart_price.innerText + cena;
      cart_pics.innerHTML += `<img src="images/macchiato.png" alt="pic1" width="200px" height="200px">`
    }
    function frappe(cena) {
      cart_price.innerText = +cart_price.innerText + cena;
      cart_pics.innerHTML += `<img src="images/frappe.png" alt="pic1" width="200px" height="200px">`
    }
    function mocha(cena) {
      cart_price.innerText = +cart_price.innerText + cena;
      cart_pics.innerHTML += `<img src="images/mocha.png" alt="pic1" width="200px" height="200px">`
    }
    function flat_white(cena) {
      cart_price.innerText = +cart_price.innerText + cena;
      cart_pics.innerHTML += `<img src="images/flat_white.png" alt="pic1" width="200px" height="200px">`
    }
    

    function cancel() {
      cart_price.innerText = 0;
      cart_pics.innerText = ""
      feedback.innerText = "Waiting for purchase..."
      feedback.style.color = "#F0FFFF55"
      feedback.style.fontStyle = "italic";
    }

    function buy() {
      if (+user_money.innerText < +cart_price.innerText) {
        feedback.innerText = "Balance too low for this purchase!"
        feedback.style.color = '#C0392B'; }

      else if (+user_money.innerText >= +cart_price.innerText) {
        feedback.innerText = "Purchase successful! Enjoy your coffee."
        feedback.style.color = '#27AE60';
        user_money.innerText -= cart_price.innerText;
        cart_pics.innerText = ""
      }
      else{
        feedback.innerText = "There was some error"
        cart_price.innerText = 0;
        cart_pics.innerText = "";
        feedback.style.color = '#C0392B';
      }
      }



