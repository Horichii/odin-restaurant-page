import bgWithoutCup from "./img/bg-without-cup.png";

function loadContact() {

    const displayArea = document.querySelector("#display-area");
    displayArea.textContent = "";

    const bgNoCup = document.createElement("img");
    bgNoCup.src = bgWithoutCup;
    bgNoCup.classList.add("background-body"); 

    const contactContainer = document.createElement("div");
    contactContainer.id = "contact-container";

    const contactTitle = document.createElement("h2");
    contactTitle.classList.add("contact-title");
    contactTitle.textContent = "Get in Touch";

    const createInfo = (label, detail) => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("contact-info-block");

        const spanLabel = document.createElement("span");
        spanLabel.classList.add("contact-label");
        spanLabel.textContent = label;

        const pDetail = document.createElement("p");
        pDetail.classList.add("contact-detail");
        pDetail.textContent = detail;

        wrapper.append(spanLabel, pDetail);
        return wrapper;
    };

    const location = createInfo("Location", "123 Coffee St., Brewtown, BT 2026");
    const phone = createInfo("Phone", "+63 9XX XXX XXXX");
    const email = createInfo("Email", "brewCoffee@brew.com");
    const hours = createInfo("Hours", "Mon - Sun: 9:00 AM - 10:00 PM");

    contactContainer.append(contactTitle, location, phone, email, hours);

    displayArea.append(bgNoCup, contactContainer);
}

export { loadContact };