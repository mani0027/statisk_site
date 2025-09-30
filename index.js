console.log("Side3 er loaded");
const productUrl = "https://kea-alt-del.dk/t7/api/categories/";

const categorylist = document.querySelector(".categorylist");

function getData() {
  console.log("Vis getdata");
  fetch(productUrl).then((res) => res.json().then((data) => showCategories(data)));
}

function showCategories(categories) {
  console.log("Vis kategori", categories);

  categories.forEach((category) => {
    console.log("kategori", category);

    categorylist.innerHTML += `<li>
     <a href="produktliste.html?category=${category.category}">${category.category}</a>
    </li>`;
  });
}

getData();
