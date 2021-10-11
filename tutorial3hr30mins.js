//create Strings using Template literals 

const person = {
    name: "zodiac hasbro",
    age: 56
};

const greeting = `hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);

//첫번쨰는 네임 두번쨰는 나이 

//wirte concies object literal declarations using simple fields 

const createPerson = (name, age, gender) => {

    return {
        name: name,
        age: age,
        gender: gender
    };
};

console.log(createPerson("zodiac hasbro", 56, "male"));



const createPerson = (name, age, gender) => ({ name, age, gender });

console.log(createPerson("zodiac hasbro", 56, "male"));

// 이 코드 2개는 똑같다 근데 2번쨰가 좀 더 짧아서 더 효율적 

//write concies declarative functions 


const bicycle = {

    gear: 2,
    setGear(newGear) {
        "use strict"
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);

//기어 바꾸기 

//use class syntax to define a constructor function


class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet)

//형하고 복습하기 처음 봐서 복잡해서 

//use getters and setters to control access to an object 

class Book {
    constructor(author) {
        this._author = author;
    }
//getter
    get writer(){
        return this._author;
    }
//setter
    set writer(updaterAuthor){
        this._author = updaterAuthor;
    }
}

//understand the differences between import and require
//file name: string_function
export const capitalizeString = str => str.toUpperCase()
//different file 
import {capitalizeString} from "./string_function"