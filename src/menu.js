import restaurantImg from "./assets/images/restaurant.png";

export default function menu() {
    const content = document.querySelector("#content");

    const menuContainer = document.createElement("div");
    const image = document.createElement("img");
    image.src = restaurantImg;
    image.classList.add("background-img");
    menuContainer.classList.add("menu-container");

    const menuSections = [
        {
            title: "Main Dishes",
            items: [
                {

                },
            ],
        },
        {
            title: "Sides",
            items: [
                {

                },
            ],
        },
        {
            title: "Beverages",
            items: [
                {

                },
            ],
        },
    ];
}