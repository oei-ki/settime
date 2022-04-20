'use strict'
let count = 0;   // 숫자(초) 카운트를 담는 변수
let m = 0;  // 숫자(분) 카운트를 담는 변수
let t = null;  //.setTimeout을 담는 변수
let timerIsOn = 0;  //setTimeout의 진행여부 확인하는 변수
// setTimeout 실행 함수
function timeCount() { //1초마다 한번씩 count를 증가시키는 함수
  // count = count + 1;
  if(m > 0) {
    document.getElementById('stop-watch').innerHTML = `${m}분${count}초`
  }else{
    document.getElementById('stop-watch').innerHTML = `${count}초`
  }
  count += 1;
  if(count == 60) {
    m += 1;
    count = 0;
  }
  // console.log(count)
  t = setTimeout(timeCount/*()x*/, 1000);
}

function startCount() {  //timeCount 함수를 실행시키는 함수
  if(timerIsOn == 0) {  //timerIsOn != 1 같은의미
    timerIsOn = 1; //반복하지 못하게 하는 함수
    timeCount();
  }
}

function stopCount() {
  clearTimeout(t);/*정지*/
  timerIsOn = 0;
  console.log('setTimeout이 정지되었습니다.');
}

function resetCount() {
  clearTimeout(t); /*정지*/
  timerIsOn = 0; /*0 다시시작*/
  count = 0;
  document.getElementById('stop-watch').innerHTML = count;
}
