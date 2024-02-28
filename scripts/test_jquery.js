
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
        $("#products_area").hide();
        // $("#products_area").show();
        $(".hero__filter_nav").html(
            "<div>Test</div>"
        )
    })
    
})


$(document).ready(function(){
    console.log("TEST SLICK SLIDER")
    $('.your-class').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true
      });
  });

// TODO: need delete or change on jQuery
// const BTN = document.querySelector("#phone_btn");
// BTN.addEventListener("click", ()=>{
//     alert("You clicked btn!")
// })