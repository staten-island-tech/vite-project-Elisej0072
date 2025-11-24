const items = [
{"name": "Hisuian Zoroark VSTAR",
 "image": "https://static.tcgcollector.com/content/images/f8/c6/a9/f8c6a9d722cd84cb7ecebbf1fe66e6414026326621aeaa94588c89ec260b7dc5.jpg",
 "alt": "zoroark",
 "type": "normal",
},

{"name": "Deoxys VSTAR",
 "image": "https://static.tcgcollector.com/content/images/ea/d1/cc/ead1ccbf859cf4c66f2e4f94dc23883b4a6fd45010c13d7d0c7c4cbaab0bfd11.jpg",
 "alt": "deoxys",
 "type": "Psychic",
},

{"name": "Zeraora VMAX",
 "image": "https://static.tcgcollector.com/content/images/2e/37/e3/2e37e32ffa4bc272558d93f231212fef1211bc7ea7c897d97219fa34f4a60cd2.jpg",
 "alt": "zeraora",
 "type": "electric",
},

{"name": "Glaceon VSTAR",
 "image": "https://static.tcgcollector.com/content/images/28/05/56/2805562b816ffce1887565858a2a8b71186ac3bb0cfa214a4d7a0eaa37e7788c.jpg",
 "alt": "glaceon",
 "type": "water",
},

{"name": "Volcarona",
 "image": "https://static.tcgcollector.com/content/images/14/f9/4f/14f94f325929cfe5d5f58c32e0ae898d9b6be55e2ac5b2a77a9adcdeb973a58f.webp",
 "alt": "",
 "type": "",
},

{"name": "Leafeon VSTAR",
 "image": "https://static.tcgcollector.com/content/images/be/f8/11/bef811b5e0e328ab5f534c9b5c7f69b58bc93f8eb6e805d6109cd8150638ffc9.jpg",
 "alt": "leafeon",
 "type": "grass",
},

{"name": "",
 "image": "",
 "alt": "",
 "type": "",
},

{"name": "Suicune V",
 "image": "https://static.tcgcollector.com/content/images/f5/db/98/f5db9853aff6ad5ec5e487e14d9659974cd88cb4a8860807ce9f45520027311b.jpg",
 "alt": "suicune",
 "type": "water",
},

]

const collection= []
function inject(item) {
const container = document.querySelector(".container"); 
/* query the container using adjacent html push card into container */

const html = `<div class ="card" data-title= "${item.name}" >
  <h2 class="card__heading">${item.name}</h2><img src="${item.image}">
  <h3> $${item.type} </h3>
  <button class="buy" data-title="${item.name}"> Add to Collection</button>
</div>`
container.insertAdjacentHTML('afterbegin', html);
}

items.forEach((item) => inject(item))

function addToCart() {
  const buttons = document.querySelectorAll("button");
  //create array if we need more than forEach
  const btnArray = Array.from(buttons);
  btnArray.forEach((btn) => btn.addEventListener("click", function(event) {
    const product = event.target.closest(".card").getAttribute("data-title")
    const collected = items.find((item) => item.name === collected)
   console.log(addtoCollection)
    injecttocart(collected,btnArray);
  }))

  //find the item in the array
  //take that object and push into cart
}
addToCart();

function injecttocart(item,btnArray) {
const cartItems = document.querySelector(".cart_items"); 
btnArray.forEach((btn) => btn.addEventListener("click", function(event) {
  const title = event.target.dataset.title;
  const item = items.find(item => item.name === name);
}));
const html = `<div class ="cart_items">
  <h2 class="card__heading">${item.name}</h2>
  <h3> $${item.price}</h3>
</div>`
cartItems.insertAdjacentHTML('afterbegin', html);
}

function filterItems(name) {
  const display = document.querySelector(".filter");
  display.innerHTML = ""; 
  const filterItems = items.filter((item) => item.name === name);
  console.log(filterItems)
 
}