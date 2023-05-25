import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";

console.log("Hello Coders! :)");

// Hamburger
const hamburgerButtonElement = document.querySelector("#hamburger");
const menuMobileElement = document.querySelector("#menu-mobile");
const mainElement = document.querySelector("main");

hamburgerButtonElement.addEventListener("click", (event) => {
  menuMobileElement.classList.toggle("open");
  console.log("mobile menu clicked");
  event.stopPropagation();
});

mainElement.addEventListener("click", (event) => {
  menuMobileElement.classList.remove("open");
  console.log("main clicked");
  event.stopPropagation();
});

//Jumbotron List
let indexJumbotronList = 0;
jumbotronList();

function jumbotronList() {
  let list = document.getElementsByClassName("jumbotron-items");
  for (let i = 0; i < list.length; i++) {
    list[i].style.display = "none";
  }
  indexJumbotronList++;
  if (indexJumbotronList > list.length - 1) {
    indexJumbotronList = 0;
  }
  list[indexJumbotronList].style.display = "block";
  setTimeout(jumbotronList, 3000);
}

////// Fetch json using fecth always fail
// async function fetchJSONData() {
//   try {
//     const response = await fetch("../src/DATA.json");
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     // Process the JSON data here
//     console.log(data);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

import data from "../DATA.json";
console.log(data);

const restoranList = document.getElementById("restoran-list");
let html = "";

data.restaurants.forEach((restoran) => {
  html += `
          <div class="card" tabindex="0"  id="${restoran.id}">
              <img class="card-img" src="${restoran.pictureId}" alt="${
    restoran.name
  }">
              <div class="card-content">
              <h3 class="card-title">${restoran.name}</h3>
              <div class="card-desc">${restoran.description.slice(
                0,
                100
              )}...</div>
              <p class="card-city">${restoran.city}</p>
              <p class="card-rating">&#9733; ${restoran.rating}</p>
              <div class="card-btn">
                  <button class="btn-card">Details</button>
                  <button class="btn-card">Order Now</button>
              </div>
              </div>
              </div>
              `;
});

restoranList.innerHTML = html;
