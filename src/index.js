import "./styles.css";

import { loadHomePage } from "./home.js";
import { loadMenuPage } from "./menu.js";
import { loadAboutPage } from "./about.js";


const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");

loadHomePage();

function openTargetPage(target) {
    const contentBox = document.getElementById("content");
    contentBox.innerHTML = "";
    switch(target){
        case home:
            loadHomePage();
            break;
        case menu:
            loadMenuPage();
            break;
        case about:
            loadAboutPage();
            break;
    }
    closeNavBox();
    window.scrollTo(0, 0);

}

aboutBtn.addEventListener("click", (e)=> {
    e.preventDefault();
    openTargetPage(about)
});

homeBtn.addEventListener("click", (e)=> {
    e.preventDefault();
    openTargetPage(home)
});

menuBtn.addEventListener("click", (e)=> {
    e.preventDefault();
    openTargetPage(menu);
});



//Close nav box logic
const checkBox = document.getElementById("dropdown");
//document.addEventListener("mousedown", closeNavBox);
document.getElementById("nav-icon").addEventListener("click", toggleNavBox);
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeNavBox();
    }
})

checkBox.addEventListener("change", toggleNavBox);


function closeNavBox() {
    checkBox.checked = false;
}

function toggleNavBox() {
    if (checkBox.checked) {
        checkBox.checked = false;
    } else {
        checkBox.checked = true;
    }

}