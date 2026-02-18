function createNavBtn(text) {
    const btn = document.createElement("button");
    btn.classList.add("nav-btn");
    btn.textContent = text;
    return btn;
}

export function createHeader() {
    const content = document.createElement("div");
    content.id = "content";

    const headline = document.createElement("h1");
    headline.id = "headline";   
    headline.textContent = "brew.";

    const nav = document.createElement("nav");
    nav.id = "nav";

    const homeBtn = createNavBtn("HOME");
    const aboutBtn = createNavBtn("ABOUT");
    const menuBtn = createNavBtn("MENU");
    const contactBtn = createNavBtn("CONTACT");

    nav.append(homeBtn, aboutBtn, menuBtn, contactBtn);
    content.append(headline, nav);

    return content;
}