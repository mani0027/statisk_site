console.log("side loaded");

const id = new URLSearchParams(window.location.search).get("id");

// console.log("id:", id);

const productUrl = "https://kea-alt-del.dk/t7/api/products/" + id;
const produkt = document.querySelector(".produkt");

console.log("produkt:", productUrl);

//Henter data ind

function getData() {
  fetch(productUrl).then((res) => res.json().then((data) => show(data)));
}

getData();

function show(data) {
  console.log("shows data er", data);

  produkt.innerHTML = `<img src="https://kea-alt-del.dk/t7/images/webp/1000/${id}.webp" alt="Sahara Team India Fanwear Round Neck Jersey">
 <h1>${data.productdisplayname}</h1>
 <h2> Brand: ${data.brandname} </h2>
 <p class= "productPrice"><span class="bold">Pris:</span> ${data.price} </p>
 <p> Kategori: ${data.category} </p>
 <p> Underkategori: ${data.subcategory} </p>
 <p> Farve: ${data.basecolour} </p>
 <p> Årstid: ${data.season} </p>
 <p> Køn: ${data.gender} </p> 
`;
}
