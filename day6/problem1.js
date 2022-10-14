
// Given a string count the number of words in that string
let str = "Hello Masai School";
let char_no = 0;
let word_no = 0;
for(i=0;i<=str.length-1;i++){
   if(str[i]==" "){
    word_no++;
  }
}
if(str.length!=0){
  console.log("number of words are :",word_no+1);
}else{
  console.log("number of words are :",0);
}
