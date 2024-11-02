// Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
let numbers=prompt("Enter 10 number separted by a space");
let arrayNumbers=numbers.split(" ");

let numHighest=parseInt(arrayNumbers[0]);

for(let i=1; i<arrayNumbers.length; i++){
    if(Number(arrayNumbers[i]) > numHighest){
        numHighest=Number(arrayNumbers[i])
    }
}
console.log(numHighest);