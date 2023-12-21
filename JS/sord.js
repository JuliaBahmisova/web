const sortAsc = () => {
    let clothesBusket = document.getElementById("node_for_insert");
    const products = Array.from(clothesBusket.getElementsByTagName("li"), (clothesCard) => {
        const title = clothesCard.querySelector(".card-title");
        return { title: title.textContent, element: clothesCard }
    });

    const sortedProducts = products.sort((a, b) => a.title > b.title ? 1 : -1);
    sortedProducts.forEach((product, i) => { product.element.style.order = i });
}

const filterPrice = (range) => {
    let clothesBusket = document.getElementById("node_for_insert");
    const products = Array.from(clothesBusket.getElementsByTagName("li"), (clothesCard) => {
        const price = clothesCard.querySelector(".price");
        return { price: +price.textContent, element: clothesCard }
    });
    const sortedProducts = products.sort((a, b) => {
        switch (range) {
            case "low":
                return a.price < b.price ? 1 : -1;
            case "high":
                return a.price > b.price ? 1 : -1;
        }
    });
    sortedProducts.forEach((product, i) => { product.element.style.order = i });
}