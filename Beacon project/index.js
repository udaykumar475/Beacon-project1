 
//  navbar toggle code js start here
 const navbartoggler = document.querySelector(".navbar-toggler");
      navbartoggler.addEventListener("click",()=>{
        navbartoggler.classList.toggle("active");
      });
    //   navbar toggle code js end here here

// testimonial section code js start here
    $("doument").ready(() =>{
    $(".testimonial-slider").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "10px",
        asNavFor:".testimonial-text",
    });
    $(".testimonial-text").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
         asNavFor:".testimonial-slider",

       
    })
    $(".testimonial-slider .slick-current").next().addClass("sl-next");
    $(".testimonial-slider .slick-current").prev().addClass("sl-prev");

     $(".testimonial-slider").on(
        "beforeChange",
        function(event, slick, currentslide, nextslide){
          $(".testimonial-slider").find(".slick-current").next().removeClass("sl-next");
          $(".testimonial-slider").find(".slick-current").prev().removeClass("sl-prev"); 
          
          
        }
     );

      $(".testimonial-slider").on(
        "afterChange",
        function(event, slick, currentslide, nextslide){
          $(".testimonial-slider").find(".slick-current").next().addClass("sl-next");
          $(".testimonial-slider").find(".slick-current").prev().addClass("sl-prev"); 
          
          
        }
     );
    

});
// testimonial section code js end here