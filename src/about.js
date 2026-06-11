
export { loadAboutPage }

function loadAboutPage() {
    console.log("Load about");
    const aboutDiv = document.createElement("div");
    const aboutText = document.createElement("p");
    aboutText.textContent = "About Page"
    document.getElementById("content").appendChild(aboutDiv);
    aboutDiv.appendChild(aboutText);
};