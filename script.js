'use strict';


const generateHuman = function () {

    const human = {
        name: "test",
        surname: "test",
        email: "test",
        age: generateRandomNumber(18, 85),
        phoneNumber: 123,
        country: "test",
        id: 1
    }


    return human;
}

const generateRandomNumber = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generateHuman());