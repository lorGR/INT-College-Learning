var productRoots = document.querySelector("#productsRoot");
function getItemsFromStorage() {
    try {
        var productString = localStorage.getItem("products");
        if (!productString)
            throw new Error("Couldn't find items in the storage");
        console.dir({ productString: productString, msg: "This is product string" });
        var products = JSON.parse(productString);
        console.dir({ products: products, msg: "This is products after parsed in JSON" });
        return products;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
