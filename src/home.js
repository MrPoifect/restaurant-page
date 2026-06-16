import BGImg from "./images/beef-tongs.jpg"

export { loadHomePage }



function loadHomePage() {
    console.log("Load home");
    const homeDiv = document.createElement("div");
    const homeImg = new Image();
    homeImg.src = BGImg;


    document.getElementById("content").appendChild(homeDiv);
    homeDiv.appendChild(homeImg);

    homeDiv.id = "home-page";
    homeImg.id = "home-image"
};

