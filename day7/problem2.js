//Print Prime Numbers from 1 to given limit
for(j=1;j<=10;j++){
  // let n = 13;
let count = 0;
for(i=1;i<=j;i++){
  if(j%i==0){
    // console.log(i);
    count++;
  }
}
if(count==2){
  console.log(j);
}
}






