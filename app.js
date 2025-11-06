const items = [
  {
    name: "Apple",
    price: 3.99,
    inStock: true,
    class: "fruit",
    img: "img/apple.webp",
    alt: "A bag of apples.",
  },
  {
    name: "Banana",
    price: 2.99,
    inStock: true,
    class: "fruit",
    img: "img/banana.png",
    alt: "A bunch of bananas.",
  },
  {
    name: "Mango",
    price: 7.99,
    inStock: true,
    class: "fruit",
    img: "img/mango.webp",
    alt: "A box of mangoes.",
  },
  {
    name: "Strawberry",
    price: 5.99,
    inStock: true,
    class: "fruit",
    img: "img/strawberry.png",
    alt: "A box of strawberries.",
  },
  {
    name: "Watermelon",
    price: 3.99,
    inStock: true,
    class: "fruit",
    img: "img/watermelon.png",
    alt: "A watermelon.",
  },

  {
    name: "Potato",
    price: 3.99,
    inStock: true,
    class: "vegetables",
    img: "img/potato.png",
    alt: "A potato.",
  },
  {
    name: "Broccoli",
    price: 3.99,
    inStock: true,
    class: "vegetables",
    img: "img/broccoli.webp",
    alt: "A broccoli.",
  },
  {
    name: "Edamame",
    price: 3.99,
    inStock: true,
    class: "vegetables",
    img: "img/edamame.png",
    alt: "An edamame.",
  },
  {
    name: "Carrot",
    price: 3.99,
    inStock: true,
    class: "vegetables",
    img: "img/carrot.webp",
    alt: "A bunch of carrots.",
  },
  {
    name: "Cauliflower",
    price: 3.99,
    inStock: true,
    class: "vegetables",
    img: "img/cauliflower.webp",
    alt: "A head of cauliflower.",
  },

  {
    name: "Crab",
    price: 6.99,
    inStock: true,
    class: "seafood",
    img: "img/crab.png",
    alt: "A crab.",
  },
  {
    name: "Octopus",
    price: 8.99,
    inStock: true,
    class: "seafood",
    img: "img/octopus.png",
    alt: "A case of octopus.",
  },
  {
    name: "Tuna",
    price: 7.99,
    inStock: true,
    class: "seafood",
    img: "img/tuna.png",
    alt: "A tunafish.",
  },
  {
    name: "Salmon",
    price: 8.99,
    inStock: true,
    class: "seafood",
    img: "img/salmon.webp",
    alt: "A salmonfish.",
  },
  {
    name: "Lobster",
    price: 20.99,
    inStock: true,
    class: "seafood",
    img: "img/lobster.webp",
    alt: "A lobster.",
  },

  {
    name: "Sourdough bread",
    price: 6.99,
    inStock: false,
    class: "bread",
    img: "img/sourdough.webp",
    alt: "A loaf of sourdough bread.",
  },
  {
    name: "Baguette",
    price: 5.99,
    inStock: true,
    class: "bread",
    img: "img/baguette.png",
    alt: "A baguette.",
  },
  {
    name: "Pita bread",
    price: 5.99,
    inStock: true,
    class: "bread",
    img: "img/pita.webp",
    alt: "A stack of pita bread.",
  },
  {
    name: "White bread",
    price: 4.99,
    inStock: true,
    class: "bread",
    img: "img/whitebread.webp",
    alt: "A loaf of white bread.",
  },
  {
    name: "Brioche bread",
    price: 6.99,
    inStock: true,
    class: "bread",
    img: "img/brioche.webp",
    alt: "A loaf of brioche bread.",
  },
];

function inject(item) {
  const section = document.querySelector(".section");
  section.insertAdjacentHTML(
    "beforeend",
    `
    <div class="container" data-class="${item.class}">
      <h2>${item.name}</h2> 
      <img src="${item.img}" alt="${item.alt}" class="item-img"/> 
      <h2>$${item.price}</h2> 
      <button class="buy">Add to cart</button>
    </div>
    `
  );
}

items.forEach((item) => inject(item));

const filters = document.querySelectorAll(".filter");
filters.forEach((button) => {
  button.addEventListener("click", () => {
    const filterClass = button.getAttribute("data-filter");
    const itemContainer = document.querySelectorAll(".container");
    itemContainer.forEach((item) => {
      const itemClass = item.getAttribute("data-class");
      if (filterClass === "all" || filterClass === itemClass) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });
});

const cart = [];
let cartTotal = 0;

function addToCart() {
  const buyButton = document.querySelectorAll(".buy");
  buyButton.forEach((button) => {
    button.addEventListener("click", (event) => {
      let itemName = event.target
        .closest(".container")
        .querySelector("h2").textContent;
      let itemPrice = event.target
        .closest(".container")
        .querySelectorAll("h2")[1].textContent;
      document.querySelector(".cart").insertAdjacentHTML(
        "beforeend",
        `<div class="cartitems">
          <h2>${itemName}</h2>
          <h2>${itemPrice}</h2>
        </div>`
      );
      cartTotal = cartTotal + Number(itemPrice.slice(1));
      document.querySelector(
        ".cartTotal"
      ).textContent = `Total: $${cartTotal.toFixed(2)}`;
    });
  });
}

addToCart();
