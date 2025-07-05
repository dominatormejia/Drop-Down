import "./styles.css";
import { greeting } from "./greeting";

console.log(greeting);

const button = document.querySelector("button");
const dropDown = document.querySelector(".drop-down");

button.addEventListener("click", () => {
  if (dropDown) {
    dropDown.classList.toggle("hidden");
  }
});

dropDown.addEventListener("click", (event) => {
  if (event.target.classList.contains("sidebar")) {
    const sibling = event.target.nextElementSibling;
    const child = event.target.firstElementChild;
    if (sibling) {
      sibling.classList.toggle("hidden");
    }
    if (child) {
      child.classList.toggle("down");
      child.classList.toggle("up");
    }
  }
});
