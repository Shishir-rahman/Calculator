
document.getElementById("demo").innerHTML = "Shishir";


function addition(x,y){
    let result = x + y;
    document.write("Sum = " + result + "<br>")

}


function subtraction(x,y){
    let result = x - y;
    document.write("Sub = " + result + "<br>")

}

function multiply(x,y){
    let result = x * y;
    document.write("Multiply = "+ result + "<br>")
}

function divided(x, y){
    let result = x/y;
    document.write("Divided = "+ result + "<br>")
}
function modulus(x,y){
    let result = x%y;
    document.write("Modulus = "+ result + "<br>")
}



addition(5,6);
addition(15,8);
addition(50,61);

subtraction(5, 8);
subtraction(15, 7);
subtraction(31, 4);

multiply(5, 6);
multiply(8, 2);
multiply(18, 5);

divided(6,2);
divided(10,3);
divided(25,5);

modulus(5,2);
modulus(10,5);
modulus(50,21);


(function total_sum(x,y){
    let result = x + y;
    document.write("Total sum = "+ result + "<br>");
})(10, 15);