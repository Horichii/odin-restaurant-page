function loadPage() {
    const content = document.querySelector("#content");

    const headline = document.createElement("h1");
    headline.textContent = "Sample headline";
    content.appendChild(headline);

}

export {loadPage};