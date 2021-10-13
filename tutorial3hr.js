// Accessing Nested Objects 

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
}

var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents)

//accessing nested arrays 

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion",
        ]
    },
    {
        type: 'trees',
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];

//Iterate with While Loops

var myArray = [];

var i = 0;

while (i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray);

//iterate with for loops

var ourArray = [];

for (var i = 0; i < 5; i++) {
    ourArray.push(i);
}


// while i is less than 5 the loop goes over and over

//count backwards with a for loop

var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
    ourArray.push(i);
}

console.log(ourArray);

// i decrements untill 0 by 2 everytime when it loops

//iterate through an Array with a for loop

var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];

}
console.log(ourTotal);

// 이거는 복잡해서 형하고 복습하기 


//iterate with do while loops 

var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 5)

console.log(i, myArray);

//이거도 형하고 복습 

//generate random fraction 

function randomFraction() {



    return Math.random();
}

console.log(randomFraction());

// 0 하고 1 사이 숫자만 출력 근데 1일수는 없다 

//generate random whole numbers 

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWhleNum() {
    return Math.floor(Math.random() * 10);
}

console.log(randomWhleNum());

//펑션 부를떄마다 10 아라에 랜덤 숫자 


//use the parseint function 

function convertToInterger(str) {
    return parseInt(str);

}

convertToInterger("56");

// 스트링을 인터져로 바꾸기 

//use the conditional (ternary) operator 

function checkEqual(a, b) {
    if (a === b) {
        return true;
    }
    else {
        return false;
    }
}

checkEqual(1, 2);

function checkEqual(a, b) {

    return a === b ? true : false;

    //return a === b; does the same thing 
}
checkEqual(1, 2)


//var vs let 

// var 바뀔수도 있다

//let은 똑같은 이름으로 2번 디클레어 하면 에러가 뜬다 

//const keyword 

//렛이 하는거 다 하지만 const는 다시 어사인 할수 없다 

//mutate an array declared with const 

const s = [5, 7, 2];
function editInplace() {
    "use strict";

    s[0] = 2;
    s[1] = 5
    s[2] = 7;
}

editInplace();

//이렇게 하면 새로운 어래이가 생긴다 

//write higher order arrow functions 

const increment = (function() {
    return function increment(number,value = 1) {
        return number + value;
    };
})();
    
console.log(increment(5,2));
console.log(increment(5));

// 첫번쨰 콘솔로그는 5하고 2 increment

// 두번째 콘솔로그는 5 하나니까 1 increment 


