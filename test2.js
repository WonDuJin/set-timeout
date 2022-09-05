

console.log("a");
setTimeout(function(){
  console.log("b");
},10);
setTimeout(function(){
  console.log("c");
},0);

// setTimeout, setInterval이 선언 될 경우 따로 빼서 작업한다.

// setTimeout은 순서를 어기기도 한다.



/*let a = setTimeout(function(){
  console.log("merong");
},1000); /// 함수 리터럴로 이름을 붙임

let b = setTimeout(function(){
  console.log("hi");

},2000);*/