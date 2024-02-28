
//! Start  point
$().ready(() => {
    // ? First method click
    // $("#phone_btn").click(()=>{
    //     alert("You clicked btn!")
    // })
    // ? First method click
    $("#phone_btn").on("click", (e) => {
        // $("#phone_btn").toggleClass("active")
        // $("#phone_btn").addClass("active");
        $("#phone_btn").removeClass("active")
        $("#phone_btn").attr("data-fuck-attr", "80085");

    })
})

// const BTN = document.querySelector("#phone_btn");
// BTN.addEventListener("click", ()=>{
//     alert("You clicked btn!")
// })