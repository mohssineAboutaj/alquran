/* created bY MOHSSINE_ABOUTAJ 1438/2017 */
/* Scripts for Quran playlist and Quran Tabke */
// Use strict mode 
//"use strict";
var control = document.getElementById('control'),
    playNow = document.getElementById('playNow'),
    quranList = ["alfatiha 1", "alfatiha 2", "alfatiha 3", "114"],
    soraName = ["الفاتحة", "الفاتحة", "الفاتحة", "الناس"],
    alqari2 = ["العيون الكوشي", "عبد الياسط عبد الصمد", "ماهر المعيقلي", "ناصر القطامي"],
    quranFolder = "quran/",
    ext = ".mp3",
    randomBtn = document.querySelector('.fa-random'),
    loopBtn = document.querySelector('.fa-retweet'),
    current = 0,
    i;

// about sorah is playing
function sorahInfo(index){
  document.querySelector('.sorahInfo').innerHTML = 
    "<table class='no-border-all'>" +
    "<tr><td>القارئ الشيخ :</td><td>" + alqari2[index] + "</td>" +
    "<tr><td>سورة :</td><td>" + soraName[index] + "</td>" +
    "<tr><td>المدة :</td><td>"; 
    setTimeout(function(){
      Math.floor(playNow.duration / 60) + ":" + Math.round(playNow.duration % 60)
    }, 3000)
    + "</td>"
    + "</table>";
}

// play and pause sorah playing
control.onclick = function () {
  control.classList.toggle('fa-play');
  control.classList.toggle('fa-pause');

  if (control.classList == 'fa fa-play') {
    playNow.pause();
  } else {
    playNow.play();
  }
};

// function play random sorah
randomBtn.onclick = function(){
  var x = Math.floor(Math.random() * quranList.length);

  playNow.src = quranFolder + quranList[x] + ext;
  playNow.play();
  sorahInfo(x);
  forward(x);
  backward(x);
  control.classList.remove('fa-play');
  control.classList.add('fa-pause');
};

// replay the sorah is playing
loopBtn.onclick = function(){
  if(playNow.hasAttribute('loop')){
    this.style.color = '#fff';
    playNow.removeAttribute('loop');
  } else {
    this.style.color = '#272727';
    playNow.setAttribute('loop','loop');
  }
};

// Forward function
function forward(current){
  document.querySelector('.fa-fast-forward').onclick = function(){
    if(current + 1 == quranList.length ){ current = -1 }
    playNow.src = quranFolder + quranList[current += 1] + ext;
    playNow.play();
    sorahInfo(current);
  };
}

// Backward function
function backward(current){
  document.querySelector('.fa-fast-backward').onclick = function(){
    if(current - 1 < 0 ){ current = quranList.length }
    playNow.src = quranFolder + quranList[current -= 1] + ext;
    playNow.play();
    sorahInfo(current);
  };
}


window.onload = setTimeout(function playAuto() {
  playNow.src = quranFolder + quranList[current] + ext;
  playNow.play();
  control.classList.remove('fa-play');
  control.classList.add('fa-pause');
  setTimeout(sorahInfo(current),1000);
  forward(current);
  backward(current);

  // Set the 'ended' event here, so it will run playNext() function each time a surah ended
  // and it will play the next surah.
  playNow.addEventListener('ended', playNext);
}, 1000);

// Play the next surah when the current one ends.
function playNext(){
  current++;
  // If the playlist is all played, then start from the beginning! :)
  if (current >= quranList.length){
    current = 0;
  }
  
  playNow.src = quranFolder + quranList[current] + ext;
  playNow.play();
  sorahInfo(current);
  forward(current);
  backward(current);
}