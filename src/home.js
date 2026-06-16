import BGImg from "./images/beef-tongs.jpg"
import clockImg from "./images/clock-time-four.svg"
import mapImg from "./images/map-marker.svg"


export { loadHomePage }
export { menuButton }


function loadHomePage() {
    console.log("Load home");
    const homeDiv = document.createElement("div");
    const homeImg = new Image();
    homeImg.src = BGImg;


    document.getElementById("content").appendChild(homeDiv);
    homeDiv.appendChild(homeImg);

    homeDiv.id = "home-page";
    homeImg.id = "home-image"

    addIntroOverlay(homeDiv);

};

const menuButton = document.createElement("button");

function addIntroOverlay(homeDiv) {
    const textBox = document.createElement("div");
    const introText = document.createElement("h1");
    const subText = document.createElement("h2")


    introText.textContent = "Come and visit us for some adequate cuisine!"
    subText.textContent = "Both edible AND cheap!"
    menuButton.textContent = "View Our Menu"

    textBox.classList.add("intro-box")

    homeDiv.appendChild(textBox);
    textBox.append(introText, subText, menuButton,);

    addAddressOverlay(textBox);
}

function addAddressOverlay(introDiv) {
    const container = document.createElement("div");

    const addressContainer = document.createElement("div")
    const addressIcon = document.createElement("img");
    const addressText = document.createElement("div");
    const addressLineA = document.createElement("p");
    const addressLineB = document.createElement("span");

    const openTimeContainer = document.createElement("div");
    const openTimeIcon = document.createElement("img");
    const openTimeA = document.createElement("div");
    const openTimeDayA = document.createElement("p");
    const openTimeTimesA = document.createElement("span");
    const openTimeB = document.createElement("div");
    const openTimeDayB = document.createElement("p");
    const openTimeTimesB = document.createElement("span");

    addressContainer.append(addressIcon, addressText);
    addressContainer.classList.add("address")
    addressIcon.src = mapImg;
    addressText.append(addressLineA, addressLineB);
    addressLineA.textContent = "123, Road Street,";
    addressLineB.textContent = "London, England"


    openTimeContainer.append(openTimeIcon, openTimeA, openTimeB)
    openTimeA.append(openTimeDayA, openTimeTimesA);
    openTimeB.append(openTimeDayB, openTimeTimesB);
    openTimeContainer.classList.add("open-time")

    openTimeDayA.textContent = "Mon-Thurs: "
    openTimeTimesA.textContent = " 9am-8pm"

    openTimeDayB.textContent = "Fri-Sun: "
    openTimeTimesB.textContent = " 9am-10pm"

    openTimeIcon.src = clockImg;

    container.classList.add("home-info")

    introDiv.appendChild(container);
    container.append(addressContainer, openTimeContainer)
}