let stops = false;
let num1;
let num2;
let num3;
let sum;
for(let i = 100; i <= 999 && stops === false; i++){
num1 = i % 10;
num2 = ((i- num1) / 10) % 10;
num3 = Math.floor((i) / 100);
sum = Math.pow(num1,3) + Math.pow(num2,3) + Math.pow(num3,3);
if(i === sum){
    stops = true;
    console.log(i);
}
}







