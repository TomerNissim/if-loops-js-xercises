let loopIndicator = [];
function inArray(num){
    for(let j = 0; j < loopIndicator.length; j++){
    if(num === loopIndicator[j] )
        return true;
    }
    return false;
}
let limit = 5;
for(let i = 1; limit > 0; i++){
   let  num = i;
  loopIndicator = [];

    while(num !== 1 && inArray(num) === false){
       console.log(num);
       console.log(loopIndicator);

        loopIndicator.push(num);
        let sum = 0;
        while(num > 0){
            let digit = num % 10;
            sum += digit * digit;
            num = (num - digit) / 10;
        }
        num = sum;
        console.log(num);
    }
    if (num === 1){
        limit--;
        console.log(i);
    }
}    
