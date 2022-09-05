let num = 0;
const a = setInterval(function(){
  num++
  console.log(num);
  if(num === 60){
    clearInterval(a);
    //a라고 이름을 정해주지 않으면 찾을 수 없으므로 종료가 안되니 이름을 붙임
  }
},16);