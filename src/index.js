import "./styles.css";

import { loadHomePage } from "./home.js";
import { loadMenuPage } from "./menu.js";
import { loadAboutPage } from "./about.js";

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");


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
    openTargetPage(menu)
});
