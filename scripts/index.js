class Car {
    #test = "test"
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
        this.#test = year + 2;
    }
    //! public method
    printText(txt) {
        this.txt = txt;
        console.log(txt)
    }
    changeValTest(val) {
        this.#test = val;
    }
    //! privare method 
    #sayHello() {
        console.log("Say Hello!")
    }
    // getters
    get test() {
        return this.#test;
    }
    // setter
    set newTest(test) {
        this.#test = test;
    }
}

class Tires extends Car {
    constructor(brand, year) {
        super(brand, year)
    }
    printText(txt = "custom") {
        console.log(txt)
    }

}

function oop() {
    const car = new Car("BMW", 2012);
    const tires = new Tires("Some brand", 2012)
    console.log("tires", tires.brand, tires.year)
    console.log(car.brand)
    car.printText("text")
    tires.printText()
    console.log(car.test)
    car.newTest = 2055
    console.log(car.test)
    car.changeValTest(2099)
    console.log(car.test)
    console.log(car.txt)
}

function events() {
    // const BTN = document.getElementsByTagName("button");
    // console.log(typeof BTN)
    // BTN.map((btn)=>{
    //     btn.addEventListener("click", ()=>{
    //         alert("test")
    //     })
    // })

    // //! GET ELEMENT BY ID
    // const BTN = document.getElementById("button")
    // BTN.addEventListener("click", ()=>{
    //     alert("test ID")
    // })

    // //! GET ELEMENT BY CLASS -- TODO: Need search solution
    // const BTNs = document.getElementsByClassName("btn");
    // console.log(typeof BTNs)
    // BTNs.addEventListener("click", ()=>{
    //     console.log("test")
    // })

    // const BTN = document.querySelector("#button")
    // BTN.addEventListener("click", ()=>{
    //     alert("query ID")
    // })

    // const BTNs = document.querySelectorAll(".btn")
    // BTNs.forEach((btn)=>{
    //     btn.addEventListener("click", ()=>{
    //         alert("test")
    //     })
    // })
    // console.log(typeof BTNs)

    // // ! Input event
    // const FIRST_NAME = document.querySelector("#first_name")
    // FIRST_NAME.addEventListener("input", (event)=>{
    //     console.log(event.target.value)
    // })

    // const FORM = document.querySelector("#test_form")
    // FORM.addEventListener("submit", (e)=>{
    //     // e.preventDefault();
    //     const FIRST_NAME = document.querySelector("#first_name").value
    //     console.log(FIRST_NAME)
    // })
    // document.addEventListener("scroll", (e)=>{
    //     console.log(window.scrollY)
    // })
}

// start point 
document.addEventListener("DOMContentLoaded", () => {
    // oop();
    // events();

    const CHANGE_BTN = document.querySelector("#button")
    const HERO_TEXT = document.querySelector("#hero")
    CHANGE_BTN.addEventListener("click", ()=>{
        // HERO_TEXT.classList.toggle("changed")
        // HERO_TEXT.setAttribute("test", "test")
        // HERO_TEXT.style.color = "#f00"
    })

})



