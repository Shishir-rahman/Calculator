
document.getElementById("demo").innerHTML = "Shishir";

/*
let a = parseInt(prompt("Enter the first Value"));
    b = parseInt(prompt("Enter the last value"));
    i=a;
    sum = 0;

while(i<=b){
    sum = sum + i;
    i=i+1;
}

document.write(sum);
*/ 

let x = 1;
    sum = 0;

    while(x<=100){
        
        if(x%5==0){
            sum = sum + x;
        }

        x = x + 1;
    }
document.write(sum);