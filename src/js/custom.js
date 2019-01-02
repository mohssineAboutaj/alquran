/*
*** Project Name: Quran play - ajax
*/

$(function(){

/* Start customize plugins */
	
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

  // make footer in bottom page
  var footer = document.querySelector('footer'),
      fixedClass = "fixed-bottom";

  setInterval(function(){
    if (window.innerHeight <= (document.body.clientHeight - (footer.clientHeight * 2))) {
      footer.classList.remove(fixedClass);
    } else {
      footer.classList.add(fixedClass);    
    }
  }, 1000);

  // show real year
  $("#thisYear").text(new Date().getFullYear());

/* End my function and codes */

});