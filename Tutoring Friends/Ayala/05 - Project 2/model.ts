class Product {

    name: string;
    price: number;
    image: string;

    constructor(name, price, image) {
        this.name = name;
        this.price = price;
        this.image = image;
    }
}

const products: Array<Product> = []    

const _products = getItemsFromStorage();
if(_products){
    products.push(..._products);
}

renderProducts(products);

