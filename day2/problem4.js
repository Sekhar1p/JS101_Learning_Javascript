
// Given stored username and password and input username and password, Print if the user can login or not.
let storedUser = "ram";
let storedPass = 123;

//for login
let user = "ram";
let pass = 123;

if(storedUser==user){
  
  if(storedPass==pass){
    console.log("login successfl");
  }else{
    console.log("incorrect password");
  }
  
}else{
  
  console.log("wrong Username ");
  
}