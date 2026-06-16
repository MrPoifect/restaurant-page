import burgerImg from "./images/plain-burger.jpg"
import cheeseBurgerImg from "./images/cheese-burger.jpg"
import chickenBurgerImg from "./images/chicken-burger.jpg"
import nuggetsImg from "./images/nuggets.jpg"
import friesImg from "./images/fries.jpg"
import hotdogImg from "./images/hotdog.jpg"
import tunaMeltImg from "./images/tuna-melt.jpg"

export { loadMenuPage }

function loadMenuPage() {
    const menuDiv = document.createElement("div");
    const mainsContent = document.createElement("div");
    const mainsTitle = document.createElement("h2");
    const sidesContent = document.createElement("div");
    const sidesTitle = document.createElement("h2");

    document.getElementById("content").appendChild(menuDiv);
    menuDiv.classList.add("menu-div");
    menuDiv.append(mainsContent, sidesContent);

    mainsContent.classList.add("mains-content", "menu-content");
    mainsContent.appendChild(mainsTitle);
    mainsTitle.textContent = "Mains";

    sidesContent.classList.add("sides-content", "menu-content");
    sidesContent.appendChild(sidesTitle);
    sidesTitle.textContent = "Sides";



    for (let i = 0; i < mainsArray.length; i++) {
        mainsContent.appendChild(renderMenuItem(mainsArray[i]));
    }

    for (let i = 0; i < sidesArray.length; i++) {
        sidesContent.appendChild(renderMenuItem(sidesArray[i]));
    }

}


let mainsArray = []
let sidesArray = []

function createMenuItem(name, description, price, imageSrc) {
    return {
        name,
        description,
        price,
        imageSrc,
    };
}

//Mains

const burger = createMenuItem(
    "Classic Burger",
    "Our cheapest beef patty, with a couple of pickles and relish",
    2.99,
    burgerImg,
);
mainsArray.push(burger);

const cheeseBurger = createMenuItem(
    "Cheese Burger",
    "Our Classic Burger meets our most in date cheese",
    3.99,
    cheeseBurgerImg,
);
mainsArray.push(cheeseBurger);

const chickenBurger = createMenuItem (
    "Greezy Chicken",
    "A chunky piece of chicken cooked to un-rawness",
    2.99,
    chickenBurgerImg,
);
mainsArray.push(chickenBurger);

const nuggets = createMenuItem (
    "Nuggets (6)",
    "Six fried nuggets. Warning: may contain chicken",
    1.49,
    nuggetsImg,
);
mainsArray.push(nuggets);

const hotdog = createMenuItem (
    "Hotdog",
    "A tube of mystery meat smushed between a bun",
    2.29,
    hotdogImg,
);
mainsArray.push(hotdog);

const tunaMelt = createMenuItem (
    "Tuna Melt",
    "Some cheese, some tuna, ALL style",
    1.37,
    tunaMeltImg,
);
mainsArray.push(tunaMelt);



//Sides

const fries = createMenuItem (
    "Fries",
    "A pot of potato fries, fried in less than week-old oil",
    2.49,
    friesImg,
);
sidesArray.push(fries);








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
