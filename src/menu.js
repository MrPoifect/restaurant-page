import burgerImg from "./images/plain-burger.jpg"
import cheeseBurgerImg from "./images/cheese-burger.jpg"
import chickenBurgerImg from "./images/chicken-burger.jpg"
import nuggetsImg from "./images/nuggets.jpg"

export { loadMenuPage }

function loadMenuPage() {
    const menuDiv = document.createElement("div");
    const menuContent = document.createElement("div");

    document.getElementById("content").appendChild(menuDiv);
    menuDiv.appendChild(menuContent);
    menuContent.classList.add("menu-content");
    menuDiv.classList.add("menu-div");

    menuContent.appendChild(renderMenuItem(burger));
    menuContent.appendChild(renderMenuItem(cheeseBurger));
    menuContent.appendChild(renderMenuItem(chickenBurger));
    

}

function createMenuItem(name, description, price, imageSrc) {
    return {
        name,
        description,
        price,
        imageSrc,
    };
}



const burger = createMenuItem(
    "Classic Burger",
    "Our cheapest beef patty, with a couple of pickles and relish",
    2.99,
    burgerImg,
);

const cheeseBurger = createMenuItem(
    "Cheese Burger",
    "Our Classic Burger meets our most in date cheese",
    3.99,
    cheeseBurgerImg,
);

const chickenBurger = createMenuItem (
    "Greezy Chicken",
    "A chunky piece of chicken cooked to un-rawness",
    2.99,
    chickenBurgerImg,
)

const nuggets = createMenuItem (
    "Nuggets (4)",
    "Four fried nuggets. Warning: may contain chicken",
    1.49,
    nuggetsImg,
)






function renderMenuItem(item) {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    const img = document.createElement("img");
    img.src = item.imageSrc;
    img.alt = item.name;
    img.classList.add("item-img", "burger");

    const info = document.createElement("div");
    info.classList.add("item-info");

    const title = document.createElement("h3");
    title.textContent = item.name;

    const description = document.createElement("p");
    description.textContent = item.description;

    const price = document.createElement("span");
    price.textContent = `£${item.price}`;

    info.append(title, description, price)
    card.append(img, info);

    return card;
}
