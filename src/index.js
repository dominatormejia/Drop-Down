import "./styles.css";
import { greeting } from "./greeting";

console.log(greeting);

const button = document.querySelector("button");
const dropDown = document.querySelector(".drop-down");

button.addEventListener("click", () => {
  if (dropDown.classList.contains("hidden")) {
    dropDown.classList.remove("hidden");
  } else {
    dropDown.classList.add("hidden");
  }
});
