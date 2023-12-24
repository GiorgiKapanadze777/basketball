const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "JA",
    price: 119,
    colors: [
      {
        img: "./img/ja2.png",
      },
      {
        img: "./img/ja2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Kyrie",
    price: 149,
    colors: [
      {
        img: "./img/kyrie1.png",
      },
      {
        img: "./img/kyrie1.png",
      },
    ],
  },
  {
    id: 3,
    title: "Lebron",
    price: 109,
    colors: [
      {
        img: "./img/lebron2.png",
      },
      {
        img: "./img/lebron2.png",
      },
    ],
  },
  {
    id: 4,
    title: "KD",
    price: 129,
    colors: [
      {
        img: "./img/kd1.png",
      },
      {
        img: "./img/kd1.png",
      },
    ],
  },
  {
    id: 5,
    title: "Lamelo",
    price: 99,
    colors: [
      {
        img: "./img/lamelo2.png",
      },
      {
        img: "./img/lamelo2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});