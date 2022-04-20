'use strict'
//live watch
// (function(){}()); 즉시 실행함수로 변경
let t = null;
function startTime(){
  let today = new Date(); //날짜 생성자
  let h = today.getHours(); // 시간
  let m = today.getMinutes(); // 분
  let s = today.getSeconds(); //초
  h = checkTime(h);
  m =checkTime(m);
  s =checkTime(s);  // checkTime()

  function checkTime(i){  //일의 자리에 '0'을 포함시키는 함수
    if( i < 10 ) {
      i = `0` + i;
    }
    return i;
  }

// 구간설정
// fu


if( h > 15 && m > 25){
  document.getElementById('txt').innerHTML = `7교시입니다.`
}
if( h > 15 && m > 49 ){
  document.getElementById('txt').innerHTML = '7교시 종료 지금은 쉬는 시간입니다.'
}
if( h == 17 ){
  document.getElementById('txt').innerHTML = `${h}:${m}:${s}  8교시 시작 지금은 수업 시간입니다.`
}else if( h == 17 && m > 49 ){
  document.getElementById('txt').innerHTML = `${h}:${m}:${s}`;
}


t = setTimeout(startTime, 1000);


  // console.log(`${h}:${m}:${s}`)
}
startTime();
