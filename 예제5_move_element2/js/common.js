'use strict'

let pos = 0;
let elem = document.getElementsByClassName('box')[0];
let id = null;
let on = 0; //setInterval이 진행중인지 판단

function returnMove(){
  clearInterval(id);
  on = 0;
  pos = 0;
  elem.style.left = pos + 'px'; //pos값을 다시 줘야지 0인  pos가 됨
}

function startMove(){
  if( on == 0 ){
    on = 1;
    id = setInterval(frame,50);
    function frame() {
      pos++;
      elem.style.left = pos + 'px'; //  == `${pos}px`
    }
  }
}

function stopMove() {
  clearInterval(id);
  on = 0;
}
