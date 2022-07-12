'use strict';

//import function from uuid library, import is available due using parcel bundler
import { v4 as uuidv4 } from 'uuid';

const arrayOfPeople = [];
let namesAndSurnames = [];

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
        id: uuidv4(),

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
////////// FETCH API ////////////////
/////////////////////////////////////

// Fetch 10 users from API JSONplaceholder 

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        if (res.ok) {
            return res.json()
        } else {
            return Promise.reject(`Http error: ${res.status}`);
        }
    })
    .then(res => {

        namesAndSurnames = res.map(user => {
            const { name = "name surname" } = user;
            return name;
        })


    }).catch(error => {
        console.error(error)
    });

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
//console.log(arrayOfPeople);


console.log(generateHuman());