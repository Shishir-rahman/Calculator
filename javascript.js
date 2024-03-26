
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


let num = [12,5,9,6,15,3];
    sum = 0;

    numSort = num.sort(function(a,b){
        return a-b;
    });

document.write(numSort + "<br>");


for(a=0; a<=5; a++){
    //document.write(" "+num[a]);
    sum = sum + num[a];
    
    //document.write(sum);
}

document.write(sum + "<br>" + "<br>");

let names = ["Imran", "Sujon", "Sujoy", "Mehedi", "Shishir"]
    nameShort = names.sort();

    document.write(nameShort + "<br>");



let scores = [68, 15, 33, 6, 75, 92, 45]

function highestScore(){
    let max = scores[0];
    for(a=1; a<= scores.length; a++){
        if(max < scores[a]){
            max = scores[a]
        }
    }
    //return max;
    document.write(max + "<br>");
}

highestScore(scores);
//document.write(highestScore(scores));



let ran = [["Tamim", 8350],["Sakib", 7435],["Mushfiq", 7760],["Shanto", 1700]]

function highestRan(){
   let maxRanner = ran[0][0];
         maxRan = ran[0][1];

    for (let a=1; a<ran.length; a++){
            if(maxRan < ran[a][1]){
                maxRan = ran[a][1];
                maxRanner = ran[a][0];
            }
        }
        document.write("Hightest Ran: "+maxRanner +" "+ maxRan + "<br>" + "<br>");
    }
    
    
highestRan(ran);


// guess number

let numberOfWin = 0;
let numberOfLost = 0;

for(i=1; i<=5; i++){

    let guessNumber = +prompt("Enter the guess number between 1 to 5");
    let rendomNumber = Math.floor(Math.random()*5) + 1;

    if(rendomNumber==guessNumber){
        console.log("Win");
        numberOfWin++;
    }
    else{
        console.log("Lost");
        numberOfLost++;
    }
}

document.write("Total Win: " + numberOfWin + "<br>");
document.write("Total Lost: " + numberOfLost + "<br>");