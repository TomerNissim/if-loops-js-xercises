let num1 = 4;
let num2 = 4;
let num3 = 5;
let biggest;
let smallest;


    if(num1 > num2 && num1 > num3){
        if(num2 > num3)
            alert(num1 + ", " + num2 + ", " +num3)
        else 
            alert(num1 + ", " + num3 + ", " +num2)

    }
    else if(num2 > num1 && num2 > num3){
            if(num1 > num3)
            alert(num2 + ", " + num1 + ", " +num3)
             else 
            alert(num2 + ", " + num3 + ", " +num1)

    }
    else if(num3 > num1 && num3 > num2){
        if(num1 > num2)
        alert(num3 + ", " + num1 + ", " +num2)
         else 
        alert(num3 + ", " + num2 + ", " +num1)    
    }
    else 
        alert((num2 + ", " + num3 + ", " +num1) )



