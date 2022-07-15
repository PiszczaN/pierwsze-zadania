'use strict';

function includes(array, elementToFind, fromIndex = 0) {
    const arrayLength = array.length;
    let startFrom = Math.floor(fromIndex);

    if (arrayLength === 0)
        return false;

    for (let i = startFrom; i < arrayLength; ++i) {

        const currentElement = array[i];

        if (i < 0)
            i = arrayLength + i;

        if (typeof (array) === typeof (['array']) && (currentElement === elementToFind || (currentElement !== currentElement && elementToFind !== elementToFind)))
            return true;

        if (typeof (array) === typeof ('string')) {



        }

    }

    return false;
}

const includesInArray = function () {

}

const includesInString = function () {

}

const tab = [1, 2, 3, 'world', 6, NaN, 3];
const sent = 'hello world'
const word = 'world';
console.log(tab.includes(word, -30));


console.log(includes(tab, NaN, -1));