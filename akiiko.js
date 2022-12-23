"use strict";

const menuList = document.querySelector(".menu-list");
const main = document.querySelector(".main");
const categoryContainer1 = document.querySelector(".category-container1");
const categoryContainer2 = document.querySelector(".category-container2");
const categoryContainer3 = document.querySelector(".category-container3");
const categoryContainer4 = document.querySelector(".category-container4");
const arrCategoryContainer = [
  categoryContainer1,
  categoryContainer2,
  categoryContainer3,
  categoryContainer4,
];

const h1 = document.querySelector(".h1");
const h2 = document.querySelector(".h2");
const h3 = document.querySelector(".h3");
const h4 = document.querySelector(".h4");

const arrHeading = [h1, h2, h3, h4];

const baseurl = "https://fakestoreapi.com";
// let limit = 3;
// const link = `${baseurl}/products?limit=${limit}`;
// const box = document.querySelector(".box");
let data, categories, products;
let cat = 0;

const categoryList = async () => {
  const catRes = await fetch("https://fakestoreapi.com/products/categories");
  categories = await catRes.json();
  console.log(categories);
  cat = categories;
  for (let i = 0; i < categories.length; i++) {
    const list = document.createElement("li");
    list.innerText = categories[i];
    arrHeading[i].innerText = cat[i];

    menuList.appendChild(list);
  }
};
const productList = async () => {
  for (let x = -1; x < 4; x++) {
    console.log("s", cat, cat[x]);
    const proRes = await fetch(
      `https://fakestoreapi.com/products/category/${cat[x]}`
    );
    products = await proRes.json();
    if (cat[x] !== "") {
      for (let j = 0; j < products.length; j++) {
        if (j === 4) {
          break;
        }
        const items = `<div class="items">
        <div class="item-img-box">
        <img src="${products[j].image}" class="item-img" alt="" />
        </div>
        <p class="item-title">${products[j].title}</p>
        <p class="item-price">$ ${products[j].price}</p>
        </div>`;
        arrCategoryContainer[x].insertAdjacentHTML("beforeend", items);
        // main.insertBefore(items);
      }
    }
  }
  //   for (let i = 0; i < products.id; i++) {
  //     const list = document.createElement("li");
  //     list.innerText = products[i];
  //     menuList.appendChild(list);
  //   }
};

categoryList();
productList();
// for (let i = 0; i <= limit; i++) {
//     fetch('https://fakestoreapi.com/products/categories')
//   const arrow = async () => {
//     const response = await fetch(link);
//     console.log(response);
//     data = await response.json();
//     console.log(data);
//     const p = document.createElement("p");
//     const img = document.createElement("img");
//     img.src = data[i].image;
//     console.log(data[i].image);
//     p.innerText = data[i].category;
//     box.appendChild(p);
//     box.appendChild(img);
//   };
//   arrow();
// }
