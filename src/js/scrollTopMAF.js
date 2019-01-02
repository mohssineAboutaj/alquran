/*
>>>> INFO <<<<
*** Project Name         : scrollTopMAF
*** version              : v1.1
*** Date of Construction : 30/10/2017
*** Project Description  : Button scroll to top
*** Athour               : Mohssine Aboutaj
*** Language use         : javaScript
*** Licence              : Free & Available to everyone
*** Requirement          : jQuery library [ min v1.11 ], fontAwesome v4
*/


// create scrollingBtn
var scrollingBtn = document.createElement('div');
var mainColor = document.body.getAttribute('data-main-color');
var secondColor = document.body.getAttribute('data-second-color');

// add arrow icon to scrollingBtn
scrollingBtn.innerHTML = '<i class="fa fa-chevron-up"></i>';
// create Css property Object for scrollingBtn
var btnStyles = {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '30px',
      height: '30px',
      lineHeight: '30px',
      textAlign: 'center',
      fontSize: '16px',
      zIndex: '9999',
      backgroundColor: mainColor,
      color: secondColor,
      borderRadius: '50%',
      opacity: '1',
      transition: 'all 0.5s',
      cursor: 'pointer'
    };

for(Xstyle in btnStyles) {
  if(btnStyles.hasOwnProperty(Xstyle)){
    scrollingBtn.style[Xstyle] = btnStyles[Xstyle];
  }
}

// add events to scrollingBtn
scrollingBtn.onmouseover = function(){
  this.style.backgroundColor = secondColor;
  this.style.color = mainColor;
  this.style.opacity = '.8';
};

scrollingBtn.onmouseout = function(){
  this.style.backgroundColor = mainColor;
  this.style.color = secondColor;
  this.style.opacity = '1';
};

$(scrollingBtn).on("click", function(){
  $('html,body').animate({scrollTop: 0}, 1500);
  $(this).fadeOut(1450);
});

// check the offSet of page
function checkTheOffSet(){
  if(pageYOffset < window.innerHeight){
    $(scrollingBtn).fadeOut();
  } else {
    $(scrollingBtn).fadeIn();
  }
}

checkTheOffSet();
window.onscroll = checkTheOffSet;

// append the scrollingBtn to body
document.body.appendChild(scrollingBtn);

/* Thank you for choose this Plugin */