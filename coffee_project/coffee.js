const menu = [
  {id:1, name:"Cappuccino", price:3.75},
  {id:2, name:"Expresso", price:2.00},
  {id:3, name:"Latte", price:4.25},
  {id:4, name:"Americano", price:3.00},
  {id:5, name:"Macchiato ", price:4.00},
  {id:6, name:"Frappé", price:5.00},
  {id:7, name:"Mocha", price:4.50},
  {id:8, name:"Frappe", price:5.00},
  {id:9, name:"Flat White", price:4.00},
  {id:10, name:"Buy"},
  {id:11, name:"Cancel"},
  {id:12, name:"Show menu"},
  {id:13, name:"See your cart"}
]

let cart = [];

console.log("--------------MENU-------------")
menu.forEach((coffee) => {
  console.log(`${coffee.id}.${coffee.name} - ${coffee.price}`)
});

while(true){
  choice = prompt("Hello what coffee do you want to buy?")
}

