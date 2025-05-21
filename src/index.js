import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";
import "./style.css";

function setUpTabs() {
    const buttons = document.querySelectorAll("header nav button");

    buttons[0].addEventListener("click", home);
    buttons[1].addEventListener("click", menu);
    buttons[2].addEventListener("click", about);
}

home();

setUpTabs();