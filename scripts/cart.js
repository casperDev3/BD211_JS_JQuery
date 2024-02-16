class Cart {
    #checkExistingCart(){
        if(!localStorage.getItem("cart")){
            return false
        }   
        return true
    }
    addToCart(id){
        // check if exist
        if(this.#checkExistingCart()){
            let cart = JSON.parse(localStorage.getItem("cart"))
            cart.push(id)
            localStorage.setItem("cart", JSON.stringify(cart))
            this.changeCounter("#cart_counter")
        } else{
            const cart = [id]
            localStorage.setItem("cart", JSON.stringify(cart))
            this.changeCounter("#cart_counter")
        }
    }
    changeCounter(selector){
        if(localStorage.getItem('cart')){
            const counter = JSON.parse(localStorage.getItem('cart')).length
            document.querySelector(selector).innerHTML = counter;
        }
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    c.changeCounter("#cart_counter")
})