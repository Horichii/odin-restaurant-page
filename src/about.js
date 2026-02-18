import bgWithoutCup from "./img/bg-without-cup.png";
import storyImg from "./img/about-pic.png"; 

function loadAbout() {
    const displayArea = document.querySelector("#display-area");
    displayArea.textContent = "";

    const bgNoCup = document.createElement("img");
    bgNoCup.src = bgWithoutCup;
    bgNoCup.classList.add("background-body"); 
    
    const aboutContainer = document.createElement("div");
    aboutContainer.id = "about-container";

    const aboutTitle = document.createElement("h2");
    aboutTitle.classList.add("about-title");
    aboutTitle.textContent = "Our Story";

    const createPara = (text) => {
        const p = document.createElement("p");
        p.classList.add("about-text");
        p.textContent = text;
        return p;
    };

    const p1 = createPara("What started as shared hobby small talk, the team at brew. quickly grew obsessed perfecting the various ways we brewed coffee and decided to go all in.");
    const p2 = createPara("With more than 200 shops across the country as of 2026, we’re constantly working hard and innovating to bring the next chapter of brew. to all coffee lovers.");
    const p3 = createPara("Using always fresh, 100% organic ingredients sourced from sustainable vendors, we stand behind our coffee, our ingredients and our technique — that’s brew.");

    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("about-image-wrapper");

    const storyImage = document.createElement("img");
    storyImage.src = storyImg;
    storyImage.classList.add("story-image");
    
    imgWrapper.append(storyImage);

    aboutContainer.append(aboutTitle, p1, p2, p3, imgWrapper);

    displayArea.append(bgNoCup, aboutContainer);
}

export { loadAbout };