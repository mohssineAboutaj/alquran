var i,control=document.getElementById("control"),playNow=document.getElementById("playNow"),quranList=["alfatiha 1","alfatiha 2","alfatiha 3","114"],soraName=["الفاتحة","الفاتحة","الفاتحة","الناس"],alqari2=["العيون الكوشي","عبد الياسط عبد الصمد","ماهر المعيقلي","ناصر القطامي"],quranFolder="quran/",ext=".mp3",randomBtn=document.querySelector(".fa-random"),loopBtn=document.querySelector(".fa-retweet"),current=0;function sorahInfo(o){document.querySelector(".sorahInfo").innerHTML="<table class='no-border-all'><tr><td>القارئ الشيخ :</td><td>"+alqari2[o]+"</td><tr><td>سورة :</td><td>"+soraName[o]+"</td><tr><td>المدة :</td><td>",setTimeout(function(){Math.floor(playNow.duration/60),Math.round(playNow.duration%60)},3e3)}function forward(o){document.querySelector(".fa-fast-forward").onclick=function(){o+1==quranList.length&&(o=-1),playNow.src=quranFolder+quranList[o+=1]+ext,playNow.play(),sorahInfo(o)}}function backward(o){document.querySelector(".fa-fast-backward").onclick=function(){o-1<0&&(o=quranList.length),playNow.src=quranFolder+quranList[o-=1]+ext,playNow.play(),sorahInfo(o)}}function playNext(){++current>=quranList.length&&(current=0),playNow.src=quranFolder+quranList[current]+ext,playNow.play(),sorahInfo(current),forward(current),backward(current)}control.onclick=function(){control.classList.toggle("fa-play"),control.classList.toggle("fa-pause"),"fa fa-play"==control.classList?playNow.pause():playNow.play()},randomBtn.onclick=function(){var o=Math.floor(Math.random()*quranList.length);playNow.src=quranFolder+quranList[o]+ext,playNow.play(),sorahInfo(o),forward(o),backward(o),control.classList.remove("fa-play"),control.classList.add("fa-pause")},loopBtn.onclick=function(){playNow.hasAttribute("loop")?(this.style.color="#fff",playNow.removeAttribute("loop")):(this.style.color="#272727",playNow.setAttribute("loop","loop"))},window.onload=setTimeout(function(){playNow.src=quranFolder+quranList[current]+ext,playNow.play(),control.classList.remove("fa-play"),control.classList.add("fa-pause"),setTimeout(sorahInfo(current),1e3),forward(current),backward(current),playNow.addEventListener("ended",playNext)},1e3);