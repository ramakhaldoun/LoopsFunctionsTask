
for(let i=0; i<=5; i++){
    alert(i);
}


///////////////////////////////////////////////////
let result="";
for(let i=0; i<=5; i++){
    result+=i
}
alert (result);

//////////////////////////////////////////////////////

let num="";
for(let i=0; i<=20; i++){
    if(i%3==0){
        num+=i;
    }
}
console.log(num);

/////////////////////////////////////////////////////


   let num4=prompt("please enter a number between 0 and 100:");
    
        while(num4<0 || num4>100){
            num4=prompt("enter a valid number:");
     }
     alert("thank you, you enterd "+ num4);

//////////////////////////////////////////////////////

let num3=prompt("enter a number");
   if(isNaN(num3)===false){
    while(num3<0 || num3>100){
        num3=prompt("enter a number between 0 and 100");
    }
    alert("thank you, you entered" +num3);
   }
   else{
    alert("not a number");
   }


/////////////////////////////////////////////////////

let num5=Number(prompt("enter an integer: "));
let sum=0;
for(let i=0; i<=num5; i++){
    sum+=i;
}
alert("the sum is: "+ sum);

//////////////////////////////////////////////////////

let num = Number(prompt("Enter an integer:"));

let sum = 0;

for (let i = 0; i <= num; i++) {
    sum += i;
}

let average = sum / (num + 1);

console.log("The average is: " + average);

   
