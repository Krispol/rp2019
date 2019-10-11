console.log("utils.js loaded");

function createItemElement(item){
    const anchor = document.createElement( tagName= "a");
    anchor.href = `./item.html?title=${item.title}&cost=${item.price}&src=${item.imgSrc}`;

    const itemContainer = document.createElement( tagName="div");
    itemContainer.className = "item";

    const imgElement = document.createElement( tagName="img");
    imgElement.src = item.imgSrc;

    const priceElement = document.createElement( tagName= "div");
    priceElement.innerText = item.price;
    priceElement.className = "item_price";

    const titleElement = document.createElement( tagName= "div");
    titleElement.className = "item_title";
    titleElement.textContent = item.title;

    anchor.append(itemContainer);
    itemContainer.append(imgElement);
    itemContainer.append(titleElement);
    itemContainer.append(priceElement);

    return anchor;
}

module.exports = {
    createItemElement
};