import bgWithoutCup from "./img/bg-without-cup.png";
import mochaIcon from "./img/mocha-icon.jpg";
import latteIcon from "./img/latte-icon.png";
import espressoIcon from "./img/espresso-icon.jpg"

function loadMenu() {
    const displayArea = document.querySelector("#display-area");
    displayArea.textContent = "";

    const bgNoCup = document.createElement("img");
    bgNoCup.src = bgWithoutCup;
    bgNoCup.classList.add("background-body"); 

    const menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";

const createItem = (name, price, description, img) => {
    const item = document.createElement("div");
    item.classList.add("menu-item");

    const leftPanel = document.createElement("div");
    leftPanel.classList.add("item-left-panel");

    const iconPlaceholder = document.createElement("div");
    iconPlaceholder.classList.add("item-icon-placeholder");
    iconPlaceholder.style.backgroundImage = `url(${img})`;

    leftPanel.appendChild(iconPlaceholder);

    const rightContent = document.createElement("div");
    rightContent.classList.add("item-right-content");

    const itemHeader = document.createElement("div");
    itemHeader.classList.add("item-header");

    const itemName = document.createElement("h3");
    itemName.classList.add("item-name");
    itemName.textContent = name;

    const itemPrice = document.createElement("span");
    itemPrice.classList.add("item-price");
    itemPrice.textContent = price;

    itemHeader.append(itemName, itemPrice);

    const itemDesc = document.createElement("p");
    itemDesc.classList.add("item-description");
    itemDesc.textContent = description;

    rightContent.append(itemHeader, itemDesc);

    item.append(leftPanel, rightContent);

    return item;
};

    const mocha = createItem("Mocha", "$9", "Brewed for cozy atmospheres, our hearty and rustic blend is reminiscent of a cabin fireplace.", mochaIcon);
    const latte = createItem("Latte", "$8", "Crafted with precision using a balanced blend of coffee and milk, a feast for the senses.", latteIcon);
    const espresso = createItem("Espresso", "$10", "Crafted with precision using a balanced blend of coffee and milk, a feast for the senses.", espressoIcon);

    menuContainer.append(mocha, latte, espresso);
    displayArea.append(bgNoCup, menuContainer);
}

export { loadMenu };