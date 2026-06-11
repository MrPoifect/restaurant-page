
export { loadMenuPage }

function loadMenuPage() {
    console.log("Load menu");
    const menuDiv = document.createElement("div");
    const menuText = document.createElement("p");
    menuText.textContent = "Menu Page"
    document.getElementById("content").appendChild(menuDiv);
    menuDiv.appendChild(menuText);
};