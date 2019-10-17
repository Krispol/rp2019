{
    const itemContainerClass = "item product product-item";
    const imageClass = "product-image-photo";
    const titleClass = "product-item-link";
    const priceClass = "price-box price-final_price";

    const items = document.getElementsByClassName(itemContainerClass);

    const arr = [];

    Array.from(items).forEach(item =>{
        const imgs = item.getElementsByClassName(imageClass);
        if(imgs.length === 0 ) return;
        const img = imgs[0];

        const src = img.src; //mitte dataset nagu juhises(ebays) järgi

        if(!src) return;

        const title = item.getElementsByClassName(titleClass)[0].textContent;
        //const title = item.getElementsByClassName(titleClass)[0];
        //if(!title) return;
        console.log("title", title.textContent);
        const price = item.getElementsByClassName(priceClass)[0].textContent;

        arr.push({
            imgSrc: src,
            title,
            price,
            category: document.title.split( separator= "|" )[0].trim(),
        })

    });

    console.log(JSON.stringify(arr));
    // või console.log(arr);
}