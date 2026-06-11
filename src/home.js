
export { loadHomePage }

function loadHomePage() {
    console.log("Load home");
    const homeDiv = document.createElement("div");
    const homeText = document.createElement("p");
    homeText.textContent = "HomePage"
    document.getElementById("content").appendChild(homeDiv);
    homeDiv.appendChild(homeText);
};