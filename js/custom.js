/*
*** Project Name: Quran play - ajax
*** Description : this is webisite islamic for alQuran alkarim it has many Sowar of alquran and information for alQurae , it"s open source for any one can be edit or help me to update
*** Author       : Mohssine Aboutaj
*** Version     : 1.04.15
*** License     : MIT, (open source and avaliable for anyone)
*** Contact Us  : mohssineaboutajtempalte@gmail.com
*/

$(function(){

/* Start customize plugins */

  // TriggerFire the jquery.niceScroll.js plugin and customiz it
  $("body").niceScroll({
    cursorcolor: $("body").attr("data-main-color"),
    cursoropacitymin: 0.5,
    cursorwidth: "5px",
    cursorborder: "none"
  });
  $("#pageContent").getNiceScroll().resize();

  // Trigger the slick plugin
/*  $('.tech').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1
  });*/

  // Trigger the wow.js library
  new WOW().init();

  // Trigger typedJs script
  var typed = new Typed("#quran-typed", {
      strings: [
        "إنا نحن نزلنا الذكر و إنا له لحافظون"
      ],
      typeSpeed: 50,
      loop: false,
      callback: setTimeout(function () {
        $('.typed-cursor').hide();
      }, 36 * 130)
    });

/* End customize plugins */

/* Start my function and codes */

  // Hide navbar on click for any link
  $("nav div#navbarSupportedContent li").click(function(){
    $("div#navbarSupportedContent").removeClass("show");
  });

/* End my function and codes */

});