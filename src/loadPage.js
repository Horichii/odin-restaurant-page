import bgWithCup from './img/bg-with-cup.png';

function loadPage() {
    const displayArea = document.querySelector("#display-area");
    displayArea.textContent = "";

    const bgCup = document.createElement("img");
    bgCup.src = bgWithCup;
    bgCup.classList.add("background-body"); 

    const container = document.createElement("div");
    container.classList.add("container");
    
    const hero = document.createElement("div");
    hero.classList.add("hero");

    //herotitle
    const heroTitle = document.createElement("h2");
    heroTitle.classList.add("hero-title");

    const firstText = document.createTextNode("Brewed to perfection.");

    const br = document.createElement("br");

    const accentSpan = document.createElement("span");
    accentSpan.classList.add("accent");
    accentSpan.textContent = "Every time.";

    heroTitle.append(firstText, br, accentSpan);
    hero.append(heroTitle);

    displayArea.append(bgCup, hero);
}

export {loadPage}; 