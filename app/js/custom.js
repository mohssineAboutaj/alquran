$(function(){(new WOW).init();new Typed("#quran-typed",{strings:["إنا نحن نزلنا الذكر و إنا له لحافظون"],typeSpeed:50,loop:!1,callback:setTimeout(function(){$(".typed-cursor").hide()},4680)});$("nav div#navbarSupportedContent li").click(function(){$("div#navbarSupportedContent").removeClass("show")});var e=document.querySelector("footer");setInterval(function(){window.innerHeight<=document.body.clientHeight-2*e.clientHeight?e.classList.remove("fixed-bottom"):e.classList.add("fixed-bottom")},1e3),$("#thisYear").text((new Date).getFullYear())});