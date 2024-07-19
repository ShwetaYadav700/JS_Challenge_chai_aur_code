//activity 1
//task 1

function checkOddEven(num){
    if(num%2 == 0){
        console.log("even");
    }else{
        console.log("odd");
    }
}
// task 2
function calSquare(num){
    console.log(num*num);
}

//activity 2
//task 3
function maxTwoNum(num1,num2){
    console.log(Math.max(num1,num2));
}
//task 4
function concatString(name, lastName){
    return name +" "+ lastName;
}

checkOddEven(6);
calSquare(7);
maxTwoNum(6,3);
let name = concatString("shweta","yadav");
console.log(name);

//task 5 
const sum = (num1,num2) =>{
    return num1+num2;
}

//task 6
const checkString = (value) =>{
    
}

//activity functions parameter and default values
//task 7 
function product(num1,num2=3){
    return num1*num2;
}
console.log( product(3,));

//task 8
function greeting(name,age=21){
    console.log("Hello "+ name);
}

greeting("Shweta",23);

//Activity 5
//task 9

function callback(){
    console.log("I am callback ");
}

function higherOrder(func , num){
    console.log("I am higher order fn");
    let i = 0;
    while(i< num){
        func();
        i++;
    }
}

 higherOrder(callback , 1);

 //task 10
radius = [1,2,3];
 const diameter = function diameter(radius){
    return 2*radius;
 }
 const area = function area(radius){
    return Math.PI*radius*radius;
 }


 function newFunction(radius , logic){
    const output =[];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
        
    }
    return output;
 }

 console.log(newFunction(radius , area));
 console.log(newFunction(radius, diameter));