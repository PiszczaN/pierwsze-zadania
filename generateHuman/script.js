//import { v4 as uuidv4 } from 'uuid';
'use strict';

const arrayOfPeople = [];

/////////////////////////////////////
//////// MAIN FUNCTION //////////////
/////////////////////////////////////

const generateHuman = function () {

    const human = {

        name: "name",
        surname: "surname",
        age: generateRandomNumber(18, 85),
        phoneNumber: generateRandomNumber(100000000, 999999999),
        country: "test",
        id: generateRandomNumber(1, 99),

        email: function () {
            //the method after the first execution will overwrite its field with an automatically generated email address
            this.email = this.name + this.surname + "@test.pl";
        }
    }

    //execute method that generates an email address
    human.email();

    arrayOfPeople.push(human);

    return human;
}

/////////////////////////////////////
////////// FUNCTIONS ////////////////
/////////////////////////////////////

const generateRandomNumber = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}





/////////////////////////////////////
//////////// TESTS //////////////////
/////////////////////////////////////

// checking if the generateHuman() will add new objects to the arrayOfPeople[]

generateHuman();
generateHuman();
generateHuman();
console.log(arrayOfPeople);


console.log(generateHuman());