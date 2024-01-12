// start point 
document.addEventListener("DOMContentLoaded", () => {
    let txt = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    // --- upper case ---
    // console.log(
    //     txt.toUpperCase()
    // )

    // --- lower case ---
    // console.log("__lower case__", txt.toLowerCase())

    // // --- replace content ---
    // console.log("___ replace ____", txt.replace("i", "o"))
    // console.log("___ replace ALL ____", txt.replaceAll("i", "o"))

    // --- length txt ---
    // console.log("LENGTH", txt.replaceAll(" ", '').length)

    // --- strip & split
    // console.log(txt.split(" "))

    // --- First and Last Letters
    // console.log("Firts Char - ", txt[0])
    // console.log("Last Char - ", txt[txt.length - 1])

    // --- Reverse ---
    // let someTxt = "Lorem";
    // let reverseTxt;
    // reverseTxt = someTxt.split("").reverse().join("");
    // console.log("reverse", reverseTxt)

    // --- Personal ---
    // let n = "John"
    // let s = "Doe"
    // let p = "Ostin"

    // console.log(`${s} ${n[0]}. ${p[0]}`)

    // console.log(2**2)
    // console.log("4" === 4)

    // let array = [1, "test", true, null]
    // // add
    // array.push("test1")
    // array.unshift("test2")
    // console.log(array)
    // // del
    // array.pop()
    // console.log(array)
    // array.shift()
    // console.log(array)
    
    // // let index = array.indexOf("test")
    // // array.splice(index, 1)
    // let filteredArr = array.filter((e)=>{
    //     return e != "test"
    // })
    // console.log(filteredArr)

    let a, b, c, d
    // primitive
    a = 1
    b = a
    a = a + 1

    // complex
    c = [1]
    d = [...c]
    c[0] = c[0] + 1

    //output
    console.log(a, b)
    console.log(c, d)
    
})
