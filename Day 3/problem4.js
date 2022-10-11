// Problem 4: Given 3 numbers (all different values), print which is greatest

let A = 10;
let B = 20;
let C = 25;

if (A > B && A > C){
  
  console.log(A, "Is Greater");
  
}else if (B > C && B > A){
  
  console.log(B,"Is Greater");
  
}else {
  
  console.log(C,"Is Greater")
  
}

// Ternary operator;

A > B && A > C ? console.log(A, "Is Greater")
  
  : B > C && B > A ? console.log(B,"Is Greater")
  
  : console.log(C,"Is Greater")