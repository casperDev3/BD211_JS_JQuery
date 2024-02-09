class Products {
    async getAllProducts() {
        const BASE_URL = 'https://fakestoreapi.com';
        const ENDPOINT = '/products'
        let products = await fetch(BASE_URL + ENDPOINT)
            .then(res => res.json())
            .then((json) => { return json })
        return products
    }
    displayProducts(products){
        let html = '';
        // generate HTML
        products.forEach((e)=>{
            html += `<!-- item -->
            <a href="#">
                <div class="grid__item">
                    <div>
                        <p>НОВЕ</p>
                        <svg width="20.884796" height="19.583313" viewBox="0 0 20.8848 19.5833" fill="none"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path id="Vector"
                                d="M18.4151 2.41614L18.419 2.42017C19.4561 3.47546 20.107 4.88336 20.107 6.35419C20.107 7.84857 19.5409 9.21619 18.4873 10.2881L10.4424 18.4738L2.39749 10.2881L2.39352 10.2841L2.38953 10.2802C1.34814 9.25085 0.777771 7.8551 0.777771 6.35419C0.777771 4.85974 1.3439 3.49219 2.39749 2.42017L2.40143 2.41614L2.40533 2.41211C3.4166 1.35284 4.78207 0.777771 6.24496 0.777771C7.5777 0.777771 8.86267 1.28955 9.88864 2.21069L10.416 2.6842L10.9364 2.20288C11.921 1.29218 13.2006 0.777771 14.5716 0.777771C16.0344 0.777771 17.4 1.35284 18.4112 2.41211L18.4151 2.41614Z"
                                stroke="#C90000" stroke-opacity="1.000000" stroke-width="1.555556" />
                        </svg>
                    </div>
                    <div>
                      <img class="grid__item_img" src="${e.image}" alt="${e.title}">
                    </div>
                    <div class="grid__item_title">
                        <div>
                            <p>${e.title}</p>
                            <p>${e.category}</p>
                            <p>${e.id}</p>
                        </div>
                        <div>
                            <div>
                                <p>${e.price} грн</p>
                                <p>В наявності</p>
                            </div>
                            <button>
                                <svg width="26.999817" height="25.649597" viewBox="0 0 26.9998 25.6496" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <defs />
                                    <path id="Vector"
                                        d="M26.1819 6.85934C25.8528 6.71832 25.4813 6.71378 25.1489 6.84668C24.8164 6.97958 24.5504 7.23911 24.4093 7.56812L20.7103 16.2L9.34201 16.2L8.10001 1.23795C8.07184 0.899689 7.91724 0.584442 7.66705 0.355011C7.41687 0.12558 7.08945 -0.00115967 6.75 0L1.35001 0C0.991943 0 0.64859 0.142242 0.395416 0.395416C0.142242 0.64859 0 0.991974 0 1.35001C0 1.70804 0.142242 2.05142 0.395416 2.3046C0.64859 2.55777 0.991943 2.70001 1.35001 2.70001L5.508 2.70001L6.75 17.6621C6.77817 18.0004 6.93274 18.3156 7.18292 18.545C7.43311 18.7745 7.76056 18.9012 8.10001 18.9L21.6 18.9C21.8641 18.9 22.1225 18.8225 22.343 18.6771C22.5635 18.5316 22.7366 18.3247 22.8406 18.0819L26.8906 8.6319C27.0317 8.30286 27.0362 7.93127 26.9033 7.59888C26.7704 7.26645 26.5109 7.00046 26.1819 6.85934Z"
                                        fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero" />
                                    <path id="Vector"
                                        d="M8.77499 25.6496C9.8934 25.6496 10.8 24.743 10.8 23.6246C10.8 22.5063 9.8934 21.5996 8.77499 21.5996C7.65662 21.5996 6.75 22.5063 6.75 23.6246C6.75 24.743 7.65662 25.6496 8.77499 25.6496Z"
                                        fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero" />
                                    <path id="Vector"
                                        d="M20.9254 25.6496C22.0438 25.6496 22.9504 24.743 22.9504 23.6246C22.9504 22.5063 22.0438 21.5996 20.9254 21.5996C19.807 21.5996 18.9004 22.5063 18.9004 23.6246C18.9004 24.743 19.807 25.6496 20.9254 25.6496Z"
                                        fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </a>
            <!-- /item -->`;
        })
        // get area for products
        let productsArea = document.querySelector("#products_area");
        // set HTML in area
        productsArea.innerHTML = html;
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