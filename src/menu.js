import restaurantImg from "./assets/images/restaurant.png";
import tacosImg from "./assets/images/veggie-tacos.jpg";
import spaghettiImg from "./assets/images/spaghetti-bolognese.jpg";
import curryImg from "./assets/images/thai-green-curry.jpg";
import salmonImg from "./assets/images/grilled-salmon-with-quinoa.jpg";
import ratatouilleImg from "./assets/images/ratatouille.jpg";
import friesImg from "./assets/images/sweet-potato-fries.jpg";
import endamameImg from "./assets/images/steamed-edamame.jpg";
import emmaSpritzImg from "./assets/images/the-emma-spritz.jpg"
import espressoImg from "./assets/images/espresso-martini.jpg"
import brambleImg from "./assets/images/bramble.jpg"
import ginImg from "./assets/images/gin-sour.jpg"

export default function menu() {
    const content = document.querySelector("#content");

    content.innerHTML = "";

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
                    name: "Veggie Tacos",
                    image: tacosImg,
                    description: "Soft tortillas filled with seasoned grilled vegetables, black beans, avocado, and a hint of lime. Served with fresh salsa.",
                },
                {
                    name: "Spaghetti Bolognese",
                    image: spaghettiImg,
                    description: "Classic Italian pasta tossed in a rich, slow-cooked tomato and ground meat sauce, finished with herbs and Parmesan.",
                },
                {
                    name: "Thai Green Curry",
                    image: curryImg,
                    description: "A creamy, aromatic coconut curry with vegetables and your choice of tofu or chicken. Served with steamed jasmine rice.",
                },
                {
                    name: "Grilled Salmon with Quinoa",
                    image: salmonImg,
                    description: "Perfectly grilled salmon fillet served over a bed of fluffy quinoa, with a side of lemon-herb dressing and seasonal vegetables.",
                },
                {
                    name: "Ratatouille",
                    image: ratatouilleImg,
                    description: "A Provençal vegetable medley of zucchini, eggplant, bell peppers, and tomatoes, slow-cooked with herbs and olive oil.",
                },
            ],
        },
        {
            title: "Sides",
            items: [
                {
                    name: "Sweet Potato Fries",
                    image: friesImg,
                    description: "Crispy on the outside, soft on the inside. Lightly seasoned and served with a house dipping sauce.",
                },
                {
                    name: "Steamed Edamame",
                    image: endamameImg,
                    description: "Tender young soybeans, lightly salted and served warm. A clean, protein-packed snack or side.",
                },
            ],
        },
        {
            title: "Beverages",
            items: [
                {
                    name: "The Emma Spritz",
                    image: emmaSpritzImg,
                    description: "A floral and fizzy signature spritz made with gin, elderflower cordial, gentian liqueur, soda water, and a touch of wine—finished with a blue flower.",
                },
                {
                    name: "Espresso Martini",
                    image: espressoImg,
                    description: "A bold and elegant mix of espresso, vodka, and cocoa liqueur, topped with a pinch of salt and coffee beans—perfect for a refined caffeine kick.",
                },
                {
                    name: "Bramble",
                    image: brambleImg,
                    description: "A refreshing blend of gin, lemon juice, crème de mûre, and sugar syrup over crushed ice, garnished with juicy blackberries.",
                },
                {
                    name: "Gin Sour",
                    image: ginImg,
                    description: "A silky, citrusy cocktail combining gin, lemon juice, sugar syrup, and egg white, with a hint of wine and lemon heart.",
                },
            ],
        },
    ];    

    menuSections.forEach((section) => {
        const sectionDiv = document.createElement("div");
        sectionDiv.classList.add("menu-section");

        const title = document.createElement("h2");
        title.textContent = section.title;
        sectionDiv.appendChild(title);

        const grid = document.createElement("div");
        grid.classList.add("menu-grid");

        section.items.forEach((item) => {
            const card = document.createElement("div");
            card.classList.add("menu-card");

            const img = document.createElement("img");
            img.src = item.image;

            const name = document.createElement("h3");
            name.textContent = item.name;

            const description = document.createElement("p");
            description.textContent = item.description;

            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(description);
            grid.appendChild(card);
        });

        sectionDiv.appendChild(grid);
        menuContainer.appendChild(sectionDiv);
    });

    content.appendChild(image);
    content.appendChild(menuContainer);
}