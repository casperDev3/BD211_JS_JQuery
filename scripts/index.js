/// ----
// const BTN_PRESS = document.querySelector("#btn_press");
// BTN_PRESS.addEventListener("click", (e) => {
//     // window.close();
//    console.log("History: ", window.history)
// })

// // window.open("https://www.google.com.ua/?hl=uk", "_blank")
///----

class Form{
    constructor(){
       this.#initElements(); 
       this.#addListeners();
    }
    #initElements(){
        this.FIRST_NAME = document.querySelector("#first_name");
        this.LAST_NAME = document.querySelector("#last_name");
        this.PHONE = document.querySelector('#phone');
        this.EMAIL = document.querySelector('#email');
        this.SELECT = document.querySelector('#dist');
        this.FILE = document.querySelector('#file');
        // show places
        this.SHOW_NAME = document.querySelector('#show_name');
        this.SEND_BTN = document.querySelector('#send_btn');
    }
    #addListeners(){
        this.SEND_BTN.addEventListener("click", (e)=>{
            e.preventDefault();
            let data = this.#getDataFromFields();
            console.log("__DATA", data)
            const IS_VALID = this.#validateData(data);
            IS_VALID ? this.#sendToServer(data) : alert("Field isn't valid!")
        })
        this.FILE.addEventListener("input", (e)=>{
            const file = e.target.files[0]; // [[kjsdfjsd ]].flat()
            let formData = new FormData();
            formData.append("files", file)
        })
        this.FIRST_NAME.addEventListener("input", (e)=>{
            if (e.target.value == ''){
                this.SHOW_NAME.innerHTML = "John / Jane";
            }else{
                this.SHOW_NAME.innerHTML = e.target.value
            }
            
        })
    }
    #getDataFromFields(){
        return {
            first_name: this.FIRST_NAME.value,
            last_name: this.LAST_NAME.value,
            phone: this.PHONE.value,
            email: this.EMAIL.value,
            select: this.SELECT.value
        }
    }
    #validateData(data){
        if(data.last_name.length < 3){
            return false
        }
        return true
    }
    #sendToServer(data){
        return {
            status: true,
            txt: "kldsjksjklfjlksd"
        }
    }
}




// start point
document.addEventListener("DOMContentLoaded", (e) => {
    const f = new Form();
})