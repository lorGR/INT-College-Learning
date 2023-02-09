var Product = /** @class */ (function () {
    function Product(name, price, image) {
        this.name = name;
        this.price = price;
        this.image = image;
    }
    return Product;
}());
var products = [];
var _products = getItemsFromStorage();
if (_products) {
    products.push.apply(products, _products);
}
renderProducts(products);
