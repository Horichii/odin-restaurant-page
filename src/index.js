import { loadPage } from "./loadPage.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";
import { loadContact } from "./contact.js";
import { createHeader } from "./header.js";
import "./styles.css";


const header = createHeader();

const displayArea = document.createElement("div");
displayArea.id = "display-area";

document.body.append(header, displayArea);

loadPage();

document.addEventListener('click', (e) => {
    
    if (e.target.matches('.nav-btn')) {
        const pageName = e.target.textContent

        if (pageName === "HOME") {
            loadPage();
        } else if (pageName === "MENU") {
            loadMenu();
        } else if (pageName === "ABOUT") {
            loadAbout();
        } else if (pageName === "CONTACT") {
            loadContact();
        }
    }
});
