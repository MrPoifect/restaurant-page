
export { loadAboutPage }

function loadAboutPage() {
    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("about")

    document.getElementById("content").appendChild(aboutDiv);

    renderAboutContent(aboutDiv);
};


function renderAboutContent(aboutDiv) {
    const aboutTitle = document.createElement("h1");
    const aboutContainer = document.createElement("div");
    const aboutTextA = document.createElement("p");
    const aboutTextB = document.createElement("p");
    const aboutTextC = document.createElement("p");
    const aboutTextD = document.createElement("p");

    aboutDiv.append(aboutTitle, aboutContainer);
    aboutContainer.append(aboutTextA, aboutTextB, aboutTextC, aboutTextD);


    aboutTitle.textContent = "About us"
    aboutTextA.textContent = `At Cheap and Edible, we've built our reputation on a simple promise: our food is both
    cheap AND edible. In an industry obsessed with freshness, quality, and "culinary excellence", we focus on the 
    basics. If it won't empty your wallet and probably won't ruin your day, it belongs on our menu.`

    aboutTextB.textContent = `Founded after a heated debate about the minimum requirements for a successful 
    restaurant, Cheap and Edible has been proudly serving meals that meet the strictest standards of affordability 
    and legal consumption. Our chefs spend countless minutes crafting dishes that are recognizable as food and 
    available at prices that make accountants nervous.`

    aboutTextC.textContent = `Whether you're a student surviving until payday, a bargain hunter chasing the 
    impossible deal, or someone who simply enjoys setting realistic expectations, Cheap and Edible welcomes you.`

    aboutTextD.textContent = `Cheap. Edible. What more were you expecting?`
}