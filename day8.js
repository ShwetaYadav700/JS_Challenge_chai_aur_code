
//task 1
let name = "Shweta";
let age =23;

console.log(`My name is ${name} age is ${age}`);

let nums = [1,2,3,4,5,6];

//task 3
let [first , second] = nums;
console.log(`First : ${first}, Second: ${second}`);

//task 4
let book ={
    title:"Mathematics",
    author:"Sir Edition"
}
let {title,author} = book;
console.log(`Title : ${title}, Author : ${author}`);

//task 5
let newArr = [...nums , 7,8];
console.log(newArr);

//task 6
function sum(...newArr){
    return newArr.reduce((acc,curr) => acc+curr ,0)
}
console.log(sum(1,2,3,4,5,7));

//task 7
function newSum(a,b=1){
    return a*b;
}
console.log(newSum(2));

//task 8
let fname ="Shweta";
let age1 = 23

let person ={
    fname,
    age1,
    greet(){
        console.log(`Hello, my name is ${this.fname} and I am ${this.age1} years old.`);
    }
}
console.log(person);
person.greet();

//task 9
let name2 = "Bharat";
let age2 = 21;

let person2 = {
    [name2]: "Name",
    [age2]: "Age"
};

console.log(person2); 