function handleSaveItems() {
    localStorage.setItem("products", JSON.stringify(products));
}
function renderProducts(products) {
    try {
        var html = products.map(function (product) {
            return "\n                <div class=\"product\">\n                    <h3>" + product.name + "</h3>\n                    <img src=\"" + product.image + "\" />\n                    <h4>" + product.price + "</h4>\n                </div>\n            ";
        }).join("");
        productRoots.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function handleAddItem(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var price = ev.target.elements.price.value;
        var image = ev.target.elements.image.value;
        products.push(new Product(name, price, image));
        console.dir(products);
        ev.target.reset();
        renderProducts(products);
        window.location.href = './index.html';
    }
    catch (error) {
        console.error(error);
    }
}
