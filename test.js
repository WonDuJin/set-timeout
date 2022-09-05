setTimeout(function(){
  console.log("a");
  setTimeout(function(){
    console.log("b");
    setTimeout(function(){
      console.log("c");
      setTimeout(function(){
        console.log("d"); 
        setTimeout(function(){
          console.log("e"); 
          setTimeout(function(){
            console.log("f"); 
            setTimeout(function(){
              console.log("g"); 
            },2000);
          },2000);
        },2000);
      },2000); 
    },2000);      
  },1000);
},3000);

// 자식으로 들어가면 먼저 출력된 후에 그 다음 작업이 실행된다.
// 다시 부른다 콜백!

    

  
