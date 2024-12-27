// root index.js

// importing all by name
import { header, nav, main, footer } from "./components";

// // add menu toggle to bars icon in nav bar
// document.querySelector(".fa-bars").addEventListener("click", () => {
//   document.querySelector("nav > ul").classList.toggle("hidden--mobile");
// });

function render() {
  console.log("Rendered!");
  document.querySelector("#root").innerHTML = `
    ${header()}
    ${nav()}
    ${main()}
    ${footer()}
    testing
  `;
}

render();
