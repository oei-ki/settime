'use strict'
setInterval(function(){
  console.log('test');
}, 1000);

// move elements
function moveElem () {
  let pos = 0;
  let elem = document.getElementById('animate')
  setInterval(frame,50); /*setInterval 고정된 시간 지연으로 함수를 반복적으로 호출*/
  function frame() {
    pos++;
    elem.style.top = pos + 'px';
    elem.style.left = pos + 'px';
  }
}
