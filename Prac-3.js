function primenumbers() {
    var a = document.getElementById("q1").value;
    var b = parseInt(a);
    var c = " given number is a prime number";
    let isPrime = true;
    if (b === 1) {
        c = "the entered number 1 is neither composite nor prime."
        document.getElementById("hello1").innerHTML = c
    }

    else if (b > 1) {

        for (let i = 2; i < b; i++) {
            if (b % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            c = "the entered number is prime."
            document.getElementById("hello1").innerHTML = c
        } else {
            c = "the entered number is not prime."
            document.getElementById("hello1").innerHTML = c
        }
    }
    else {
        c = "the entered number is not prime."
        document.getElementById("hello1").innerHTML = c
    }
}
function reversestring() {

    var a = document.getElementById("q2").value;
    let newString = "";
    for (let i = a.length - 1; i >= 0; i--) {
        newString += a[i];
    }
    document.getElementById("hello2").innerHTML = newString;
}
function table()
{
var a= document.getElementById("q3").value;
var b=parseInt(a);
for(let i = 1; i <= 10; i++) {
// multiply i with number
const result = i * b;
// display the result
console.log(`${b} * ${i} = ${result}`);
}
}
function age()
{
var a= document.getElementById("q4").value;
var b=parseInt(a);
var difference=Date.now() - b;
var age_dt = new Date(difference);
var var3= Math.abs(age_dt.getUTCFullYear() - 1970);
var4=var3-34
document.getElementById("hello3").innerHTML = var4;
}