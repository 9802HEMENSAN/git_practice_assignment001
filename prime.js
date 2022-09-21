 // Problem 1: Create a function to check if a number is Prime or Not
function checkPrime(number){
  let factor=0;
 for(let i=1; i<=num; i++){
  if(number%i===0){
     factor++;
   }
 }
 if(factor==2){
   console.log(number,"is prime");
 }else{
   console.log(number,"is not a prime");
 }
 }
  
 checkPrime(13);
