let categoryContainer;
export function addProductItems(products) {
  for (let j = 0; j < products.length; j++) {
    console.log(products);
    const items = `<div class="items" onclick='gotopage(${products[j].id})'>
      <div class="item-img-box">
      <img src="${products[j].image}" class="item-img" alt="" />
      </div>
      <div class = "item-details">
      <p class="item-title">${products[j].title}</p>
      <p class="item-price">$ ${products[j].price}</p>
      </div>
      </div>`;
    console.log(categoryContainer);
    categoryContainer.innerHTML += items;
  }
  function gotopage(ids) {
    console.log(ids);
    // const productID = fetch(`https://fakestoreapi.com/products/${ids}`);
  }
}

export async function productList(para) {
  const main = document.querySelector(".main");

  const proRes = await fetch(
    `https://fakestoreapi.com/products/category/${para}`
  );
  const product = await proRes.json();
  // count[x] = products;
  const div = `<div class="category-wrapper">
        <div class= "heading-box">
        <h1 class="heading">${para}</h1>
        </div>
        <div class="category-container box"></div>
        </div>`;
  main.innerHTML += div;
  const categoryWrapper = document.querySelector(".category-wrapper");
  // categoryWrapper.classList.add("hidden");
  categoryContainer = document.querySelector(`.category-container`);

  console.log(categoryContainer);
  addProductItems(product);

  // const menuBtns = document.querySelectorAll(".menu-btns");
  // const home = document.querySelector(".home");
  // home.addEventListener("click", homePage);
  // menuBtns[0].addEventListener("click", electronicsPage);
  // menuBtns[1].addEventListener("click", jeweleryPage);
  // menuBtns[2].addEventListener("click", mensClothingPage);
  // menuBtns[3].addEventListener("click", womensClothingPage);
}

export async function categoryList() {
  const header = document.querySelector(".header");
  const navRes = await fetch("../products/navbar.html");
  const nav = await navRes.text();
  header.innerHTML = nav;
  console.log(nav);

  const menuList = document.querySelector(".menu-list");
  const catRes = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await catRes.json();
  // console.log(categories);
  let cat = categories;
  for (let i = 0; i < categories.length; i++) {
    const list = document.createElement("button");
    list.innerText = categories[i];
    list.classList.add("menu-btns");
    // arrHeading[i].innerText = cat[i];

    menuList.appendChild(list);
    console.log(list);
  }
  const menuBtns = document.querySelectorAll(".menu-btns");
  const home = document.querySelector(".home");
  home.addEventListener("click", homePage);
  menuBtns[0].addEventListener("click", electronicsPage);
  menuBtns[1].addEventListener("click", jeweleryPage);
  menuBtns[2].addEventListener("click", mensClothingPage);
  menuBtns[3].addEventListener("click", womensClothingPage);
}

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
