import restaurantImg from "./assets/images/restaurant.png";

export default function home() {
    const content = document.querySelector("#content");
    content.textContent = "";

    const image = document.createElement("img");
    image.src = restaurantImg;
    image.classList.add("background-img");

    content.appendChild(image);
}