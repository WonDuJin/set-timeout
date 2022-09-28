// let first = setTimeout(() => {
//   console.log("첫 번째 setTimeout입니다. 3초뒤 실행됩니다.");
//   let second = setTimeout(() => {
//     console.log("두 번째 setTimeout입니다. 2초뒤 실행됩니다.");
//     let third = setTimeout(() => {
//       console.log("세 번째 setTimeout입니다. 1초뒤 실행됩니다.");
//       let fourth = setTimeout(() => {
//         console.log("네 번째 setTimeout입니다. 1초뒤 실행됩니다.");
//         let fifth = setTimeout(() => {
//           console.log("다섯 번째 setTimeout입니다. 1초뒤 실행됩니다.");
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 2000);
// }, 3000);
// // 비동기를 동기로 바꾼 것이 아닌, 실행되는 순서를 바꾼 것이다. (콜백형태로 바꾼것)

// // let second = setTimeout(() => {
// //   console.log("두 번째 setTimeout입니다. 2초뒤 실행됩니다.");
// // }, 2000);

// // let third = setTimeout(() => {
// //   console.log("세 번째 setTimeout입니다. 3초뒤 실행됩니다.");
// // }, 1000);

// //먼저 실행을 끝내는 놈이 먼저 출력 된다. 기다리지 않는다.

let test = new Promise(function (resolve, reject) {
  console.log(typeof resolve);
  console.log(typeof reject);
  console.dir(resolve);
});
console.dir(test);
