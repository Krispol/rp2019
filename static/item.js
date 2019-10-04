const x = window.location;
console.log(x);
const params = new URLSearchParams(window.location.search)
const title = params.get("title");
const cost = params.get("cost");
const src = params.get("src");
console.log(title, cost, src);
//alert(`title: ${title} cost: ${cost} src: ${src}`)

const container = document.createElement("div");
container.className = "itemContainer";

const image = document.createElement("img");
image.src= src;
image.className = "item_image";

const titleElement = document.createElement("h2");
titleElement.textContent = title;
titleElement.className = "item_title";

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const textElement = document.createElement ("p");
textElement.textContent = description;
textElement.className = "item_description";

const costElement = document.createElement("div");
costElement.textContent = cost;
costElement.className = "item_price";


container.append(titleElement);
container.append(image);
container.append(textElement);
container.append(costElement);

/*const element = document.createElement("div");
element.append(document.createTextNode("Hello World"))*/

window.addEventListener("load", () => {
    const app = document.getElementById("item-body");
    app.append(container);
});