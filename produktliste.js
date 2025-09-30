console.log("loaded...");
const produktContainer = document.querySelector(".produkt_container");

getData("https://kea-alt-del.dk/t7/api/products");

function getData(url) {
  fetch(url).then((res) => res.json().then((data) => showProducts(data)));
}

function showProducts(products) {
  console.log("products", products);
  products.forEach((product) => {
    console.log("productdisplayname", product.productdisplayname);

    produktContainer.innerHTML += `<article class="cards">
        <img src="https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp" alt="Sahara Team India Fanwear Round Neck Jersey" />
        <h2>${product.productdisplayname}</h2>
        <h3>${product.brandname}</h3>
         <p>${product.season}</p>
        <p class="pris">
          <span>Prev.</span>
          DKK 1595,-
        </p>
        <div class="rabat">
          <p>Now DKK 1560,-</p>
          <p>-34%</p>
        </div>
        <a href="produkt.html?id=${product.id}">Read More</a>
      </article>`;
  });
}
