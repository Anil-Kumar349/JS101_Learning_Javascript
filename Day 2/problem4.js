// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let database_username = "anil@gmail.com";
let database_password = "anil@123";
let input_username = "anil@gmail.com";
let input_password = "anil@123";

// Nested if, else statements.
if (database_username == input_username){

  if (database_password == input_password){

    console.log("Login successful");
    
  }else {
    
    console.log("Incorrect password");
  }
  
}else{
  
  console.log("Wrong credentials");
  
}