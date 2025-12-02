import './style.css'

const items = [
{"name": "Hisuian Zoroark VSTAR",
 "image": "https://static.tcgcollector.com/content/images/f8/c6/a9/f8c6a9d722cd84cb7ecebbf1fe66e6414026326621aeaa94588c89ec260b7dc5.jpg",
 "alt": "zoroark.png",
 "type": "NORMAL",
 "price": 26.73,
},

{"name": "Deoxys VSTAR",
 "image": "https://static.tcgcollector.com/content/images/ea/d1/cc/ead1ccbf859cf4c66f2e4f94dc23883b4a6fd45010c13d7d0c7c4cbaab0bfd11.jpg",
 "alt": "deoxys.png",
 "type": "PSYCHIC",
 "price": 27.35,
},

{"name": "Zeraora VMAX",
 "image": "https://static.tcgcollector.com/content/images/2e/37/e3/2e37e32ffa4bc272558d93f231212fef1211bc7ea7c897d97219fa34f4a60cd2.jpg",
 "alt": "zeraora.png",
 "type": "ELECTRIC",
 "price": 16.17,
},


{"name": "Volcarona",
 "image": "https://static.tcgcollector.com/content/images/14/f9/4f/14f94f325929cfe5d5f58c32e0ae898d9b6be55e2ac5b2a77a9adcdeb973a58f.webp",
 "alt": "volcarona.png", 
 "type": "FIRE",
 "price": 35.38,
},

{"name": "Leafeon VSTAR",
 "image": "https://static.tcgcollector.com/content/images/be/f8/11/bef811b5e0e328ab5f534c9b5c7f69b58bc93f8eb6e805d6109cd8150638ffc9.jpg",
 "alt": "leafeon.png",
 "type": "GRASS",
 "price": 54.92,
},

{"name": "Braviary",
 "image": "https://static.tcgcollector.com/content/images/07/e0/0f/07e00fc23d78161172e81a9263f06940f9e70237cc239864f6c3713f10780a4f.webp",
 "alt": "braviary.png",
 "type": "NORMAL",
 "price": 6.68,
},

{"name": "Dachsbun ex",
 "image": "https://static.tcgcollector.com/content/images/4b/7e/f3/4b7ef34b95cfd3402c955b72e3fcb6eede62d96ccf9c66a5c8ba2a3322e06497.jpg",
 "alt": "dachsbun.png",
 "type": "PSYCHIC",
 "price": 32.28,
},

{"name": "Zekrom ex",
 "image": "https://static.tcgcollector.com/content/images/e5/db/a1/e5dba1a47e7e06df5b012543381a07659ba59ee69e3134b4475c8fd5e2250e37.webp",
 "alt": "zekrom.png",
 "type": "ELECTRIC",
 "price": 230.00,
},

{"name": "Chandelure",
 "image": "https://static.tcgcollector.com/content/images/80/8f/8c/808f8ca369dead9d0d75f05f7933b8ea4e16c9a23b51109bf42adba55f8f2981.webp",
 "alt": "chandelure.png",
 "type": "FIRE",
 "price": 41.64,
},

{"name": "Liepard",
 "image": "https://static.tcgcollector.com/content/images/4a/25/59/4a25599fbe74c8f3eccda55d5ab38df04c7807283c7c316b3756c35f3294c48c.webp",
 "alt": "liepard.png",
 "type": "DARK",
 "price": 21.75,
},

{"name": "Zamazenta",
 "image": "https://static.tcgcollector.com/content/images/60/65/1d/60651db5c982948c074ae596125882ddc6839c854c4155f03f2345e7d7c516c2.webp",
 "alt": "zamazenta.png",
 "type": "STEEL",
 "price": 3.64,
},

{"name": "Glaceon VSTAR",
 "image": "https://static.tcgcollector.com/content/images/28/05/56/2805562b816ffce1887565858a2a8b71186ac3bb0cfa214a4d7a0eaa37e7788c.jpg",
 "alt": "glaceon.png",
 "type": "WATER",
 "price": 47.40
},

{"name": "Houndoom",
 "image": "https://static.tcgcollector.com/content/images/5b/51/b5/5b51b52e778c9b07e1b79d3314210e0e57c68a0888a1752643cdffc0c75f2d55.jpg",
 "alt": "houndoom.png",
 "type": "FIRE",
 "price": 35.84,
},

{"name": "Latios",
 "image": "https://static.tcgcollector.com/content/images/fa/e7/6d/fae76d64f7c54a59f13c8cce88990b513aabf8cb84096e9fa478c43d5d6c0389.webp",
 "alt": "latios.png",
 "type": "PSYCHIC",
 "price": 22.55,
},

{"name": "Suicune V",
 "image": "https://static.tcgcollector.com/content/images/f5/db/98/f5db9853aff6ad5ec5e487e14d9659974cd88cb4a8860807ce9f45520027311b.jpg",
 "alt": "suicune.png",
 "type": "WATER",
 "price": 39.99,
},

{"name": "Umbreon ex <tera> ",
 "image": "https://static.tcgcollector.com/content/images/17/95/72/179572ac9a5aafcacbfa0af9bec335dd0926b2bc0c552fbb81056c9ea9fa4d89.webp",
 "alt": "umbreon.png",
 "type": "DARK",
 "price": 1111.00,
},

{"name": "Sprigatito",
 "image": "https://static.tcgcollector.com/content/images/c4/c7/58/c4c758b786cb9facb5e2a362541a392013ec2d0cad2d88cb12b54dd50461f17b.jpg",
 "alt": "sprigatito.png",
 "type": "GRASS",
 "price": 24.26
},

{"name": "Reshiram ex",
 "image": "https://static.tcgcollector.com/content/images/c9/db/73/c9db735f72bff28a810bf5feeb92c9636fab1de3b7e0f6f74c3b2ee2d952ed4d.webp",
 "alt": "reshiram.png",
 "type": "FIRE",
 "price": 188.00,
},

{"name": "Aegislash",
 "image": "https://static.tcgcollector.com/content/images/a3/ee/34/a3ee349883c0672a2d84051f6ad6e30149b3e2519c7f6c96f88b4f994f111a18.jpg",
 "alt": "aegislash.png",
 "type": "STEEL",
 "price": 5.84,
},

{"name": "Ceruledge ex <tera>",
 "image": "https://static.tcgcollector.com/content/images/3e/da/8a/3eda8afdf9e5f99852f95669bf98582263cad38f27d3097ef11064d6108dfd5e.webp",
 "alt": "ceruledge.png",
 "type": "FIRE",
 "price": 111.00,
},

{"name": "Koraidon ex",
 "image": "https://static.tcgcollector.com/content/images/3d/0a/69/3d0a692ecd4f7871917775931a59c6d1297a21a250797b87302f26eed7f56e5e.jpg",
 "alt": "koraidon.png",
 "type": "FIGHTING",
 "price": 14.99,
},

{"name": "Reuniclus",
 "image": "https://static.tcgcollector.com/content/images/17/eb/44/17eb449adeb55ca3e976f06e3944b5978142543f8fe0b0fbeb2abd1d5dd72454.jpg",
 "alt": "reuniclus.png",
 "type": "PSYCHIC",
 "price": 8.40,
},

{"name": "Armarouge",
 "image": "https://static.tcgcollector.com/content/images/8d/d3/d9/8dd3d9f541bee645197569f39d531798070207dcf64835fde7b9ffacbf6a98ce.jpg",
 "alt": "armarouge.png",
 "type": "FIRE",
 "price": 12.90,
},

{"name": "Noibat",
 "image": "https://static.tcgcollector.com/content/images/41/23/a0/4123a04740d389629cddcb69bf54338d196ccafc3597caf56c66fab4b8c946b0.webp",
 "alt": "noibat.png",
 "type": "NORMAL",
 "price": 3.40,
},

]

const collection= []
function inject(item) {
const container = document.querySelector(".container"); 
const html = `<div class ="card" data-title= "${item.name}" >
  <h2 class="card__heading">${item.name}</h2><img src="${item.image}">
  <h3> $${item.price} </h3>
  <h4> ${item.type} </h4>
  <button class="buy" data-title="${item.name}"> Add to Collection </button>
</div>`
container.insertAdjacentHTML('afterbegin', html);
}

items.forEach((item) => inject(item))

function addToCollection() {
  const buttons = document.querySelectorAll("button");
  const btnArray = Array.from(buttons);
  btnArray.forEach((btn) => btn.addEventListener("click", function(event) {
    const product = event.target.closest(".card").getAttribute("data-title")
    const purchased= items.find((item) => item.name === product)
    console.log(purchased)
    injecttocart(purchased,btnArray);
  }))
}

function injectToCollection(item,btnArray) {
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