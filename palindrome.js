
 function reverse(str){
    let bag="";
    for(let i=str.length-1;i>=0; i--){
      bag+=str[i];
    }
     if(bag==str){
       return true;
     }
   return false;
  }
let answer = checkPal("racecar");
if(answer == true){
    console.log("string is palindrome");
}else{
    console.log("string is not palindrome");

}  
   

