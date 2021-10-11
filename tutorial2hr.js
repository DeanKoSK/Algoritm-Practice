


//return a value from a function with return

function minunSeven(num) {
    return num - 7;
}

console.log(minunSeven(10))

// minusSeven 안에 있는 숫자 빼기 

//understanding undefined value returned from a function

var sum = 0;
function addThree() {
    sum = sum + 3;
}

// 펑션안에 sum = sum = 3; 처럼 뭘 넣어주지 않으면 펑션은 밸유는 undefined


//stand in line

//boolean values

//불리안은 트루하고 폴스박에 없다 온오프 스위치 처럼 

//Use conditional logc with if statements 

function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "yes it is";
    }
    return "No, it's false"
}

// 트루면 첫번쨰 폴스면 2번쨰

//compairson with the equality operator 

function testEqual(val) {
    if (val == 12) {
        return "Equal"
    }
    return "Not Equal"
}

testEqual(10);

// double == 더 정확하다. = 하나는 val을 다시 각인시키는거 

//practuce comparing different values 

function testEqual(a, b) {
    if (a == b) {
        return "Equal"
    }
    return "Not Equal"
}

console.log(testEqual(10, "10"));

//스트링하고 넘버는 같지 않다 
// <,>,!= 도 된다 

//Logical Order in If else statements

function orderMyLogic(val) {
    if (val < 10) {
        return "less thjan 10";
    } else if (val < 5) {
        return "less than 5"
    } else {
        return "Greater than or equal to 10";
    }
}

console.log(orderMyLogic(7));

// if 다음 else if 마지막은 else.

//chainning if else statemetns

//golf code

var names = ["Hole in one!", "eagle", "birdie", "par", "bogey"];
function golfscore(par, strokes) {

    if (strokes == 1) {
        return names[0]
    } else if (strokes <= par - 2) {
        return names[1]
    } else if (strokes == par - 1) {
        return names[2]
    } else if (strokes == par) {
        return names[3]
    } else if (strokes == par + 1) {
        return names[4]
    } else if (strokes <= par + 2) {
    }


    return "change me";
}

console.log(golfScore(5, 4))

//switch statements 

function caseInSwitch(val) {
    var answer = "";

    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;

        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }


    return answer;
}

console.log(caseInSwitch(1));

//Returning Boolean Values from functions

function isLess (a,b) {

    if (a < b) {
        return true;
    } else {
        return false;
    }
}

isLess(10,15); 

function isLess (a,b) {

    return a < b;
}

isLess(10,15); 

//두번째가 더 효율적이다 

//Build JavaScript objects

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

//밸유는 : 다음 , 어레일이수도 어는 data type일수있다 


//Accessuing object properties with dot notation

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

var nameValue = testObj.name;

//Accessing Object Properties with Bracker Notation

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

var tailsValue = testObj["name"];