class Products {
    async getAllProducts() {
        // console.log("Start fetching data")

        let products = await fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then((json) => { return json })

        // let products = await fetch('https://fakestoreapi.com/products')
        // products = await products.json();
        // console.log(products)

        // console.log("Finish fetching data")
        return products
    }
    displayProducts(products){
        console.log("PRODUCTS FOR DISPLAY", products)
    }
}
//start point
document.addEventListener("DOMContentLoaded", async () => {
    // init
    const p = new Products(); // p - products
    // use
    const products = await p.getAllProducts();
    p.displayProducts(products);
})