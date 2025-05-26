import restaurantImg from "./assets/images/restaurant.png";

export default function about() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const image = document.createElement("img");
    image.src = restaurantImg;
    image.classList.add("background-img");

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");

    const aboutTitle = document.createElement("h2");
    aboutTitle.textContent = "About Us";

    const aboutText = document.createElement("p");
    aboutText.innerHTML = `
        <strong>About Us:</strong> <br>
        We are a culinary-driven establishment founded on the principles of craftsmanship, hospitality, and integrity. Our mission is to offer guests a refined yet welcoming dining experience, where each dish is a reflection of our commitment to quality, seasonality, and thoughtful execution.
        </br></br>
        Our menu is designed to celebrate global influences through carefully composed plates that emphasize fresh, responsibly sourced ingredients. From modern interpretations of classic comfort dishes to lighter, plant-forward offerings, we strive to deliver cuisine that is both satisfying and distinctive.
        </br></br>
        Beyond the plate, we are dedicated to creating an atmosphere of warmth and professionalism. Our team takes pride in attentive service, consistency in preparation, and a shared vision of excellence in every aspect of the guest experience.
        </br></br>
        We invite you to join us—not only to enjoy a meal, but to engage in a dining experience that is intentional, genuine, and enduring.
    `;

    aboutContainer.appendChild(aboutText);

    content.appendChild(image);
    content.appendChild(aboutContainer);
}
