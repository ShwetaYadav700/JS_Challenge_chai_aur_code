//task 1
let num = [1,2,3,4,5];
console.log(num);
//task 2
console.log(num[0]);
console.log(num[1]);

//activity 2
//task 3

num.push(6);
num.push(7);
console.log(num);

//task 4
num.pop();
console.log(num);

//task 5
num.shift();
console.log(num);

//task 6
num.unshift(9);
console.log(num);

//activity 3

//task 7
const map1 = num.map((x) => x*2 )
console.log(map1);

//task 8
const even = num.filter((x)=> x%2==0);
console.log(even);

//task 9
const reducer = num.reduce((accu , currValue)=> accu+currValue , 0)
console.log(reducer);


//activity 4

//task 10
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

//task 11
num.forEach(element => {
    console.log(element);
});

//activity 12

//task 12
const twoD = [
    [1,2,3,4],
    [5,6,7,8]
]
console.log(twoD);

//task 13
console.log(twoD[1][2]);


