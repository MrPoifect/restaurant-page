import burgerImg from "./images/plain-burger.jpg"
import cheeseBurgerImg from "./images/cheese-burger.jpg"
import chickenBurgerImg from "./images/chicken-burger.jpg"
import nuggetsImg from "./images/nuggets.jpg"
import friesImg from "./images/fries.jpg"
import hotdogImg from "./images/hotdog.jpg"
import tunaMeltImg from "./images/tuna-melt.jpg"
import pickleImg from "./images/pickle.jpg"
import onionRingsImg from "./images/onion-rings.jpg"
import garlicBreadImg from "./images/garlic-bread.jpg"
import saladImg from "./images/salad.jpg"
import breadsticksImg from "./images/bread-sticks.jpg"
import icecreamImg from "./images/icecream.jpg"
import cakeImg from "./images/cake.jpg"
import ricePuddingImg from "./images/rice-pudding.jpg"
import waterImg from "./images/water.jpg"
import milkImg from "./images/milk.jpg"
import orangeJuiceImg from "./images/orange-juice.jpg"
import milkshakeImg from "./images/milkshake.jpg"
import coffeeImg from "./images/coffee.jpg"

export { loadMenuPage }

function loadMenuPage() {
    const menuDiv = document.createElement("div");
    const menuTitle = document.createElement("h1");
    const mainsContent = document.createElement("div");
    const mainsTitle = document.createElement("h2");
    const sidesContent = document.createElement("div");
    const sidesTitle = document.createElement("h2");
    const dessertContent = document.createElement("div");
    const dessertTitle = document.createElement("h2");
    const drinksContent = document.createElement("div");
    const drinksTitle = document.createElement("h2");

    document.getElementById("content").appendChild(menuDiv);
    menuDiv.classList.add("menu-div");
    menuTitle.textContent = "Menu";
    menuDiv.append(menuTitle, mainsContent, sidesContent, dessertContent, drinksContent,);

    mainsContent.classList.add("mains-content", "menu-content");
    mainsContent.appendChild(mainsTitle);
    mainsTitle.textContent = "Mains";

    sidesContent.classList.add("sides-content", "menu-content");
    sidesContent.appendChild(sidesTitle);
    sidesTitle.textContent = "Sides";

    dessertContent.classList.add("dessert-content", "menu-content");
    dessertContent.appendChild(dessertTitle);
    dessertTitle.textContent = "Desserts";

    drinksContent.classList.add("drinks-content", "menu-content");
    drinksContent.appendChild(drinksTitle);
    drinksTitle.textContent = "Drinks";



    for (let i = 0; i < mainsArray.length; i++) {
        mainsContent.appendChild(renderMenuItem(mainsArray[i]));
    }

    for (let i = 0; i < sidesArray.length; i++) {
        sidesContent.appendChild(renderMenuItem(sidesArray[i]));
    }

    for (let i = 0; i < dessertArray.length; i++) {
        dessertContent.appendChild(renderMenuItem(dessertArray[i]));
    }

    for (let i = 0; i < drinksArray.length; i++) {
        drinksContent.appendChild(renderMenuItem(drinksArray[i]));
    }

}


let mainsArray = []
let sidesArray = []
let dessertArray = []
let drinksArray = []

function createMenuItem(name, description, price, imageSrc) {
    return {
        name,
        description,
        price,
        imageSrc,
    };
};



function createMainMenu() {

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
};

function createSideMenu() {

    const fries = createMenuItem (
        "Fries",
        "A pot of potato fries, fried in less than week-old oil",
        2.49,
        friesImg,
    );
    sidesArray.push(fries);

    const pickle = createMenuItem (
        "Pickle (Single)",
        "An individual crunchy pickle",
        0.39,
        pickleImg,
    );
    sidesArray.push(pickle);

    const onionRings = createMenuItem (
        "Onion Rings",
        "Several crispy onions rings warning: May contain squares",
        1.29,
        onionRingsImg,
    );
    sidesArray.push(onionRings);

    const garlicBread = createMenuItem (
        "Garlic Bread",
        "Bread meets butter meets garlic",
        1.49,
        garlicBreadImg,
    );
    sidesArray.push(garlicBread);

    const salad = createMenuItem (
        "Side Salad",
        "A bunch of rabbit food shoved in a dish",
        2.29,
        saladImg,
    );
    sidesArray.push(salad);

    const breadSticks = createMenuItem (
        "Bread Sticks",
        "Sticks of varying lengths and size",
        1.49,
        breadsticksImg,
    );
    sidesArray.push(breadSticks);
};

function createDessertMenu() {

    const iceCream = createMenuItem (
        "Ice Cream",
        "Your choice of flavor from : vanilla or vanilla",
        3.29,
        icecreamImg,
    );
    dessertArray.push(iceCream);

    const cake = createMenuItem (
        "Cake Slice",
        "A slice of cake that's not too old, and not too dry",
        2.39,
        cakeImg,
    );
    dessertArray.push(cake);

    const ricePudding = createMenuItem (
        "Rice Pudding",
        "A milky rice, served with strawberry jam",
        1.19,
        ricePuddingImg,
    );
    dessertArray.push(ricePudding);



}

function createDrinksMenu() {

    const water = createMenuItem(
        "Tap Water",
        "Delicious room temperature water in a cup",
        42.49,
        waterImg,
    );
    drinksArray.push(water);

    const milk = createMenuItem(
        "Glass of milk",
        "Freshly squeezed milk, straight from the cow",
        0.79,
        milkImg,
    );
    drinksArray.push(milk);

    const orangeJuice = createMenuItem(
        "Orange Juice",
        "Day old squeezed orange juice, straight from the carton",
        0.49,
        orangeJuiceImg,
    );
    drinksArray.push(orangeJuice);

    const milkshake = createMenuItem (
        "Milkshake",
        "Freshly squeeze milkshake, straight form a bouncing cow",
        1.32,
        milkshakeImg,
    );
    drinksArray.push(milkshake);

    const coffee = createMenuItem (
        "Coffee",
        "Freshly made instant coffee, straight from the jar",
        0.59,
        coffeeImg,
    );
    drinksArray.push(coffee);

}



createMainMenu();
createSideMenu();
createDessertMenu();
createDrinksMenu();


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
};
