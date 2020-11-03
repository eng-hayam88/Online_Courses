$(document).ready(function() {
//   chang navbar background
$(window).scroll(function(){
if($(window).scrollTop() > 60){
    $("#nav").css("background-color","#fff")
  
}else{
    $("#nav").css("background-color","rgba(0,0,0,0.1)")
}
})
// ///////////////////////
// search box
$(".search-btn").click(function(){
  $(".search-text").toggleClass("search-text-width");
})
// ////////////////////
// scroll to element
$(".nav-link").click(function(){
  $("html,body").animate({
  scrollTop:$("#" + $(this).data("scroll")).offset().top
  },1000);
})
// //////////////////////
// close navbar
$(window).scroll(function(){
    if($(this).scrollTop() > 200){
        $(".close-nav").show();

   $(".close-nav i").click(function(){
    $("#nav").hide();
   })
}else{
    $("#nav").show();
    $(".close-nav").hide();
}
})
// ///////////////////////
//conut
$('.counter').counterUp({
  delay: 10,
  time: 1100
});

  // ///////////////////

    $(".controls").click(function() {
      $(".sidebar").toggleClass("active");
  });
        
 
    $("#white").click(function() {
        $("body").css("background","#fff");
        $(".section-title h2").css("color","#777");
        $(".section-title h2::after").css("color","#000")
        $(".header-title p").css("color","#000");
        $("h2").css("color","#777");
        $(".ours-section p").css("color","#000");
        $(".ours-section h5").css("color","#000");
        $("h4").css("color","#000");
        $("p").css("color","#000");
        $(".sidebar .controls").css("color","purple");
        $(".testimonial-item p").css("color","#000");
    });

    $("#gradient").click(function() {
       
        $("body").css("background","linear-gradient(#f9eed3 ,#c9af98)");
    });

    $("#dark").click(function() {
        $("body").css("background","rgba(0,0,0,0.8)");
        $(".section-title h2").css("color","#fff");
        $(".section-title h2::after").css("color","#fff")
        $(".header-title p").css("color","#fff");
        $("h2").css("color","#fff");
        $(".ours-section p").css("color","#fff");
        $(".ours-section h5").css("color","#fff");
        $("h4").css("color","#fff");
        $("p").css("color","#fff");
        $(".sidebar .controls").css("color","#fff");
        $(".testimonial-item p").css("color","#000");
    });

  
 
    
    // play video in full width
    $("#myvideo").click(function() {
        $(this).css("width","100%");
    });

    // Isotope
  $('.gallery-item').isotope({
    // options
    itemSelector: '.item',
    layoutMode: 'fitRows'
  });
  


  $('.courses-section ul li').on('click',function(){
   $(this).addClass('active').siblings().removeClass('active');
   var selector = $(this) .attr('data-filter');
   $('.gallery-item').isotope({
     filter:selector

  });
  return false;
  })


//   ////////////////////
$('.owl-carousel').owlCarousel({
    autoplay: true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})
// //////////////
$(".accordian-item").click(function(){
    $(".accordian-item").removeClass("active");
    $(this).addClass("active");
})

// //////////////////////////////////////

$(".accordian-BX").click(function(){
  $(this).toggleClass("active").siblings().removeClass("active");
})

// //////////////////////////////////////////////////////////////////
 //scroll to top button
 var mybutton = $("#mybtn");
  $(window).scroll(function(){
    // if($(this).scrollTop() >=600){
    //   mybutton.show();
    // }else{
    //   mybutton.hide();
    // }
  
  $(window).scrollTop() >= 600 ? mybutton.show() : mybutton.hide();
  })

  mybutton.click(function(){
    $('html,body').animate({
    scrollTop:0
    },1000)
  })
});

//  ////////////////////////////////////////
//validate email and password
$('#email').keyup(function(){
  if(validatemail()){
      $('#email').css('border','2px solid green')
      $('.validate-email').html("  ")
  }else{
      $('#email').css('border','2px solid red')
      $('.validate-email').html("<p class='text-danger'>Please enter a valid email</p>")
  }
});
$('#name').keyup(function(){
  if(validatename()){
      $('#name').css("border","2px solid green")
      $('.validate-name').html("  ")
  }else{
      $('.validate-name').html("<p class='text-danger'> Please enter at least 4 chars</p>");
      $('#name').css("border","2px solid red")
  }
})

function validatename() {
var name = $('#name').val();
if(name.length > 4){
return true;
}else{
 return false;
}
}
function validatemail() {
var email = $('#email').val();
var reg =  /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if(reg.test(email)){
return true;
}else{
return false;
}
}
// //////////////////////
// Latest News section
$(document).ready(function(){
  $(".my-tabs li").click(function(){
  var myID = $(this).attr("id");
   $(this).removeClass("inactive").siblings().addClass("inactive");
  $(".news > div").hide();
  $("#" + myID + "-content").show();
})
})

















