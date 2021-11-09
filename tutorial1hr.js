
var myName = "Dean";

myName = 8;

let ourName = "freeCodeCamp";

const pi = 3.14

//다른 데이터 타입으로 variable 만들기 

//Storing Values with Assingment Operator 

var a;

var b = 2;

a = 7;
// = used for assigning a variable

//Initializing Variable w/ Assignment Operator

var a = 9;

//var a is declaring
// 9 is assigning

//Uninitialized Variable

var a = 5;
var b = 10;
var c = "I am a ";

a = a + 1;
b = b + 5;
c = c + " String!";

//case sensitivity in variable

var StudLYCapVar

STUDLYCAPVAR = 10

// 캐몰케이스를 써서 이런 실수가 안나게. 

//Adding numbers

var sum = 10 + 10;

console.log(sum) // = 20 

//subtracting numbers

var difference = 45 - 33;

console.log(difference)// = 12

//Multiplying numbers

var product = 8 * 10;
//= 80

//Dividing Numbers

var quotient = 66 / 33;

//= 2 

//Incrementing numbers

var myVar = 87;
myVar++ // instead of myVar = myVar + 1 

//Decrementing numbers 

var myVar = 11;
myVar--; // instead of myVar = myVar - 1;

// decimal numbers 

var ourDecimal = 5.7;

//multiply decimals

var product = 2.0 * 1.0;
//=2


// Divide decimals
var quotient = 4.4 / 2.0;

//Finding a remainder

var remainder;
remainder = 11 % 3;
//remainder = 2 

// Compound assignment with augmented addition 

var a = 3;
var b = 17;
var c = 12;

a = a + 12;
//instead 
a += 12;

//Compound assignment with augmented subtraction

var a = 3;

a = a - 6;
//instead 
a -= -6;

//Compound Assignment with augmented muliplication 

var a = 5;

a = a * 5;
//instead
a *= 5;

//Compound Assignment with Augmented Division 

var a = 48;

a = a / 12;
//instead 
a /= 12;


// Declare String Variables

var firstName = "Alan";
var lastName = "Turing";

//Concatenationg Strings with Plus Operator

var ourStr = "I come first. " + "I come Second";

// +로 스트링 두개 합치기


//Concatenating Strings with plus equals operator

var ourStr = "I come first.";
ourStr += "I come second";

//숫자를 쓰듯이 ourStr 하고 저 스트링을 add 하는거 

//Constructing Strings with variables

var ourName = "freeCodeCamp";
var ourStr = "Hello our name is " + ourName + ", how are you?";

// 스트링 하고 배리어블을 합치기. 

//appending variable to strings

var anAdjectvie = "awesome";
var ourStr = "freecodecamp is";
ourStr += anAdjectvie;

//이러면 합쳐짐

//Find legnth of string 

var firsNameLenght = 0;
var firstName = "Ada";

firsNameLenght = firstName.length;

//Bracket Notation to find first character in string

var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

// 특정 인데스에 있는거 가져오기 

//string immutability

var myStr = "jello world";

myStr[0] = "H";
//이렇게 해도 안바뀐다 왜냐하면 스트링은 바뀌지 않는다 
//바꾸려면 다시 각인 시켜야된다 ex: myStr = "hello world";

//Bracket Notation to find the last character in string

var firstName = "Ada";
var lasLetterOfFirstName = firstName[firstName.length - 1]

//-1 마지막. 

//Store multiple values with arrays 

var ourArray = ["Jhon", 23];

//어레이로 다른 데이타 타입 데이터를 store 할수있다 

//nested arrays

var ourArray = [["hello", 42], ["how are you", 77]];

// 어레이 안에 어레이 

//access array data with indexes
var ourArray = [50, 60.70];
var ourData = ourArray[0];

//Modify Array Data with Indexes

var ourArray = [18, 64, 99];
ourArray[1] = 45;

// 인덱스 1에 있는 데이터를 45로 바꾸기

//access multi=dimensional arrays with indexes
var ourArray = [["hello", 42], ["how are you", 77]];

var myData = ourArray[0][0];

//manipulate arrays with push ()

// () = 끝에 뭐를 추가하는

var ourArray = ["Dean", "asd", "mola"];
ourArray.push(["happy", "days"]);

//manipulate arrays with pop ()

var ourArray = [1, 2, 3];
var removeFromOurArry = ourArray.pop();

//마지막꺼 빼내기 

//shopping list

var myList = [["cereal", 3], ["milk", 2], ["bannas", 3]]

//write reusable code with fucntions

function ourReusableFuntion() {
    console.log("annyneong");
}

ourReusableFuntion();

//펑션이 불리면 콘솔로그가 안녕이라고 한다

//passing values to functions with arguments

function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}

ourFunctionWithArgs(10, 5);

// 10 - 5

//global scope and functions

//global scope = you can see it everywhere in your code

var myGlobal = 10;
//global scope

function fun1() {
    oopsGlobal = 5;
}

//이 평션에서만 쓸수있다 

//Local scope and functions 

function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}

myLocalScope();
//펑션을 부르면 5가 나온다 
console.log(myVar);
// 콘솔로그는 안나온다 왜냐하면 펑션 안에서 만들어진 variable이여서