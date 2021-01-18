let int1 = 12;
let int2 = 234;
let limit;
let  greatestCommonDivisor;
if(int1 < int2)
    limit = int1;
else limit = int2;    

for(let i = 1; i <= limit; i++){
    if((int1 % i === 0) && (int2 % i === 0))
        greatestCommonDivisor = i;

}
console.log(greatestCommonDivisor);