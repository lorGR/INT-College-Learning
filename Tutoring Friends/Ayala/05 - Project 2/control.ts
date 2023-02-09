function handleSaveItems(){
    localStorage.setItem("products",JSON.stringify(products));
}

function renderProducts(products: Array<Product>) {
    try {
        const html = products.map((product) => {
            return `
                <div class="product">
                    <h3>${product.name}</h3>
                    <img src="${product.image}" />
                    <h4>${product.price}</h4>
                </div>
            `;
        }).join("");

        productRoots!.innerHTML = html;

    } catch (error) {
        console.error(error);
    }
}

function handleAddItem(ev:any){
    try {
        ev.preventDefault();
        const name = ev.target.elements.name.value;
        const price = ev.target.elements.price.value;
        const image = ev.target.elements.image.value;

        products.push(new Product(name, price, image));

        console.dir(products);

        ev.target.reset();

        renderProducts(products);
        window.location.href = './index.html';
    } catch (error) {
        console.error(error);
    }
}