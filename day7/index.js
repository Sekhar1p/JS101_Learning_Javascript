// for(j=1;j<=10;j++){
//   let sum = "";
//   for(i=1;i<=5;i++){
//   // console.log("*");
//   sum+="*"+" ";
//    }
// console.log(sum);
// }

// console.log("*");
// console.log("**");
// console.log("***");
// console.log("****");
// for(i=1;i<=4;i++){
//   let sum = "";
//   for(j=1;j<=i;j++){
//     sum+="*"+" ";
//   }
//   console.log(sum);
// }

// for(i=1;i<=4;i++){
//   let sum = "";
//   let num = "";
//   for(j=1;j<=i;j++){
//     num +=j +" ";
//     sum+="*"+" ";
//   }
//     console.log(num);
//   console.log(sum);
// }
//break; and continue;
for(i=1;i<=4;i++){
  for(j=1;j<=4;j++){
    if(i==2){
      break;
      // continue;
    }
    console.log(i,j);
  }
}
