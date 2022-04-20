'use strict'
function timeText() {
  let x = document.getElementById('txt');
  setTimeout(function(){x.value = '2초'},2000);
  setTimeout(function(){x.value = '4초'},4000);
  setTimeout(function(){x.value = '8초'},8000);
  setTimeout(function(){x.value = '9초'},9000);
  setTimeout(function(){x.value = '12초'},12000);
}
