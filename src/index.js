import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";
import "./style.css";

function clearActiveButtons() {
    document.querySelectorAll("nav button").forEach(btn => {
        btn.classList.remove("active-tab");
    });
}

function setUpTabs() {
    const buttons = document.querySelectorAll("nav button");

    buttons[0].addEventListener("click", () => {
        clearActiveButtons();
        buttons[0].classList.add("active-tab");
        home();
    });

    buttons[1].addEventListener("click", () => {
        clearActiveButtons();
        buttons[1].classList.add("active-tab");
        menu();
    });

    buttons[2].addEventListener("click", () => {
        clearActiveButtons();
        buttons[2].classList.add("active-tab");
        about();
    });
}

home();
document.querySelector("nav button").classList.add("active-tab");

setUpTabs();