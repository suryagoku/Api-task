// import { categoryList } from "./function.js";
let a = "10";
sessionStorage.setItem("lastname", a);
sessionStorage.getItem("lastname");

const menuList = document.querySelector(".menu-list");
const home = document.querySelector(".home");

const main = document.querySelector(".main");

const baseurl = "https://fakestoreapi.com";

let data, categories, products, div, index, count, list, allProduct;
let arrAllProducts = [];
let cat = 0;
let id = [];
index = 0;
const categoryList = async () => {
  // const header = document.querySelector(".header");
  // const navRes = await fetch("../products/navbar.html");
  // const nav = await navRes.text();
  // header.innerHTML = nav;
  const catRes = await fetch("https://fakestoreapi.com/products/categories");
  categories = await catRes.json();
  // console.log(categories);
  // cat = categories;
  for (let i = 0; i < categories.length; i++) {
    // list = document.createElement("button");
    // list.innerText = categories[i];
    // list.classList.add("menu-btns");
    list = `<a href="../products/${categories[i]}.html"><li class = 'menu-btns'>${categories[i]}</li> </a>`;
    menuList.innerHTML += list;
    console.log(list);
  }
};

const productList = async () => {
  const catRes = await fetch("https://fakestoreapi.com/products/categories");
  const cat = await catRes.json();
  for (let x = 0; x < 4; x++) {
    console.log("cat[x]", x, cat, cat[x]);
    if (cat[x] !== "") {
      const proRes = await fetch(
        `https://fakestoreapi.com/products/category/${cat[x]}`
      );
      products = await proRes.json();
      arrAllProducts[x] = products;
      allProduct = arrAllProducts.flat();
      console.log("all Products", arrAllProducts, allProduct);
      console.log("products", products);
      // count[x] = products;
      div = `<div class="category-wrapper">
      <div class= "heading-box">
      <h1 class="heading">${cat[x]}</h1>
      <button class="show-all">Show All</button>
      </div>
      <div class="category-container box"></div>
      </div>`;

      main.innerHTML += div;
      const categoryWrapper = document.querySelector(".category-wrapper");
      // categoryWrapper.classList.add("hidden");

      const categoryContainer =
        document.querySelectorAll(`.category-container`);
      console.log(categoryContainer);

      // const addItems = () => {
      for (let j = 0; j < products.length; j++) {
        if (j === 4) {
          break;
        }
        const items = `
        <div class="items id${products[j].id}">
          <div class="item-img-box">
          <img src="${products[j].image}" class="item-img" alt="" />
          </div>
          <div class = "item-details">
          <p class="item-title">${products[j].title}</p>
          <p class="item-price">$ ${products[j].price}</p>
          </div>
          </div>`;
        console.log("products", products);
        categoryContainer[index].innerHTML += items;

        id[products[j].id] = document.querySelector(`.id${products[j].id}`);
        id[products[j].id].addEventListener("click", () => {
          console.log("id clicked", id[products[j].id]);
        });

        console.log(id[products[j].id]);
        console.log(id);
        // id[products[j].id].addEventListener("click", productPage);
      }
    }
    index++;
    console.log("id", id);
  }
  // }
  // console.log("all Products", arrAllProducts);
  // allProduct = arrAllProducts.flat();
  // console.log("all Products", arrAllProducts, allProduct);

  // id = document.querySelectorAll(".id");
  // console.log("id list", id.length, id);
  // id[1].addEventListener("click", () => {
  //   console.log("id-0 clicked");
  // });
  // for (let z = 0; z < id.length; z++) {
  //   function page() {
  //     let abx = z;
  //     return abx;
  //   }
  //   let a = id[z];
  //   a.addEventListener("click", () => {
  //     let linkPage = page();
  //     console.log(linkPage);
  //     fetch(`https://fakestoreapi.com/products/electronics/${linkPage}`)
  //       .then((res) => res.json())
  //       .then((json) => console.log(json));
  //     // if (z > -1 && z < 4) {
  //     //   fetch(`https://fakestoreapi.com/products/electronics/${linkPage}`)
  //     //     .then((res) => res.json())
  //     //     .then((json) => console.log(json));
  //     // } else if (z > 3 && z < 8) {
  //     //   fetch(`https://fakestoreapi.com/products/jewelery/${linkPage}`)
  //     //     .then((res) => res.json())
  //     //     .then((json) => console.log(json));
  //     // } else if (z > 7 && z < 12) {
  //     //   fetch(`https://fakestoreapi.com/products/men's clothing/${linkPage}`)
  //     //     .then((res) => res.json())
  //     //     .then((json) => console.log(json));
  //     // } else if (z > 11 && z < 15) {
  //     //   fetch(`https://fakestoreapi.com/products/women's clothing/${linkPage}`)
  //     //     .then((res) => res.json())
  //     //     .then((json) => console.log(json));
  //     // }

  //     // console.log(id[1]);
  //   });
  // }

  const menuBtns = document.querySelectorAll(".menu-btns");
  const showAll = document.querySelectorAll(".show-all");
  home.addEventListener("click", homePage);
  menuBtns[0].addEventListener("click", electronicsPage);
  menuBtns[1].addEventListener("click", jeweleryPage);
  menuBtns[2].addEventListener("click", mensClothingPage);
  menuBtns[3].addEventListener("click", womensClothingPage);
  showAll[0].addEventListener("click", electronicsPage);
  showAll[1].addEventListener("click", jeweleryPage);
  showAll[2].addEventListener("click", mensClothingPage);
  showAll[3].addEventListener("click", womensClothingPage);
  console.log("first id", id[10], allProduct);
  for (let z = 0; z < id.length; z++) {
    function page() {
      let abx = z;
      return abx;
    }
    // let a = ;
    // id[z].addEventListener("click", () => {
    //   let linkPage = page();
    //   console.log(linkPage);
    //   //     fetch(`https://fakestoreapi.com/products/electronics/${linkPage}`)
    //   //       .then((res) => res.json())
    //   //       .then((json) => console.log(json));
    //   //     // if (z > -1 && z < 4) {
    //   //     //   fetch(`https://fakestoreapi.com/products/electronics/${linkPage}`)
    //   //     //     .then((res) => res.json())
    //   //     //     .then((json) => console.log(json));
    //   //     // } else if (z > 3 && z < 8) {
    //   //     //   fetch(`https://fakestoreapi.com/products/jewelery/${linkPage}`)
    //   //     //     .then((res) => res.json())
    //   //     //     .then((json) => console.log(json));
    //   //     // } else if (z > 7 && z < 12) {
    //   //     //   fetch(`https://fakestoreapi.com/products/men's clothing/${linkPage}`)
    //   //     //     .then((res) => res.json())
    //   //     //     .then((json) => console.log(json));
    //   //     // } else if (z > 11 && z < 15) {
    //   //     //   fetch(`https://fakestoreapi.com/products/women's clothing/${linkPage}`)
    //   //     //     .then((res) => res.json())
    //   //     //     .then((json) => console.log(json));
    //   //     // }

    //   //     // console.log(id[1]);
    // });
  }
};

categoryList();
// console.log(cat);
productList();

const homePage = () => {
  location.href = "../products/index.html";
  console.log("button clicked");
};
const electronicsPage = () => {
  location.href = "../products/electronics.html";
  console.log("button clicked");
};
const jeweleryPage = () => {
  location.href = "../products/jewelery.html";
  console.log("button clicked");
};
const mensClothingPage = () => {
  location.href = "../products/mens-clothing.html";
  console.log("button clicked");
};
const womensClothingPage = () => {
  location.href = "../products/womens-clothing.html";
  console.log("button clicked");
};

// const call = (z) => {
//   console.log("anime");
//   const pro = async (o) => {
//     const productIDRes = await fetch(`https://fakestoreapi.com/products/${o}`);
//     const productID = await productIDRes.json();
//     console.log(productID);
//   };
//   pro(z);
// };
