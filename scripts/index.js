// functions
function testDeclareFunction(a, b = 2) {
    const c = a + b
    if (c > 4) {
        return "+"
    } else {
        return "-"
    }
}

function objects() {
    let someObj = {
        first_name: "John",
        last_name: "Doe",
        age: 21
    };
    console.log("NAME:", someObj.first_name);
    someObj.city = "Dro";
    delete someObj.age;
    someObj = {};
    console.log("T", someObj);
}

const arrFunction = (text) => {
    console.log("Test Func", text)
}

const conditionals = () => {
    // let age = 4;
    // if (age >= 18) {
    //     console.log("adult");
    // } else if (age >= 0 && age < 18){
    //     console.log(
    //         "child", age 
    //     )
    // }
    // // ternal condition
    // age >= 18 ? console.log("adult") : console.log("child");

    // const offline = 0;
    // if (offline){
    //     console.log("test off");
    // }

    // let test = 10;

    // test ? (
    //     console.log(test),
    //     console.log("test")
    // ) : (
    //     console.log(test)
    // )

    // let test = true;
    // !test && console.log("test &&");

    // !test || console.log("test ||");

    // const expr = 'Papayas';
    // switch (expr) {
    //     case 'Oranges':
    //         console.log('Oranges are $0.59 a pound.');
    //         break;
    //     case 'Mangoes':
    //     case 'Papayas':
    //         console.log('Mangoes and papayas are $2.79 a pound.');
    //         // Expected output: "Mangoes and papayas are $2.79 a pound."
    //         break;
    //     default:
    //         console.log(`Sorry, we are out of ${expr}.`);
    // }

}


const loops = () => {
    // let flag = true;
    // let counter = 1;
    // while (flag) {
    //     if (counter >= 5){
    //         break;
    //     }
    //     counter++;
    // }
    // console.log("test",counter)

    let arrValues = [1, "test", "y", false];

    // for (let i = 0; i < arrValues.length; i++){
    //     console.log(arrValues[i])
    // }

    // arrValues.forEach((item, index) => {
    //     if (item) {
    //         item += 2;
    //     }
    //     console.log(item, index)
    // })

    // arrValues.map((item, index) => {
    //     if (item) {
    //         item += 2;
    //     }
    //     console.log(item, index)
    // })

    let age = [12, 18, 25, 45, 7];
    // short form
    // let adultList = age.filter(item => item >= 18);
    // full form
    // let adultList = age.filter((item) => {
    //     if (item >= 18) {
    //         return item
    //     }
    // })
    // console.log(adultList);
    
}

// start point 
document.addEventListener("DOMContentLoaded", () => {
    // objects();
    // const test = testDeclareFunction(2);
    // arrFunction("Hello!!");
    // conditionals();
    loops();
})
