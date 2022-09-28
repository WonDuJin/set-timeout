let first = setTimeout(() => {
  let second = setTimeout(() => {
    let third = setTimeout(() => {
      console.log("세 번째 setTimeout입니다. 1초뒤 실행됩니다.");
    }, 1000);
    console.log("두 번째 setTimeout입니다. 2초뒤 실행됩니다.");
  }, 2000);
  console.log("첫 번째 setTimeout입니다. 3초뒤 실행됩니다.");
}, 3000);

// let second = setTimeout(() => {
//   console.log("두 번째 setTimeout입니다. 2초뒤 실행됩니다.");
// }, 2000);

// let third = setTimeout(() => {
//   console.log("세 번째 setTimeout입니다. 3초뒤 실행됩니다.");
// }, 1000);
