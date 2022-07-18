'use strict';

/////////////////////////////////////
//////// MAIN FUNCTION //////////////
/////////////////////////////////////

function includes(array, elementToFind, fromIndex = 0) {

    // saving 'fromIndex' in specific variable which rounds down a possible non-integer number
    // the variable 'stringChecker' is used to diagnose whether the searched STRING is in the STRING passed as the place from which we are looking
    const arrayLength = array.length;
    let startFrom = Math.floor(fromIndex);
    let stringChecker = 0;

    // if 'array' is empty return false

    if (arrayLength === 0)
        return false;

    //if fromIndex has negative value the function searches the array from ([arrayLength] + [fromIndex]) to the end

    if (startFrom < 0)
        startFrom = arrayLength + startFrom;

    //iterating through array or string and holding current element in 'currentElement'

    for (let i = startFrom; i < arrayLength; ++i) {

        const currentElement = array[i];

        // IF the function gets an ARRAY to be searched
        // if current element is equal to element to find function will return true
        // OR if element to find is NaN - checking if currentElement !== currentElement && elementToFind !== elementToFind
        // BECAUSE NaN !== NaN

        if (typeof (array) === typeof (['array']) && (currentElement === elementToFind || (currentElement !== currentElement && elementToFind !== elementToFind)))
            return true;

        //IF the function gets an STRING to be searched

        if (typeof (array) === typeof ('string') && typeof (elementToFind) === typeof ('string')) {

            if (currentElement === elementToFind[stringChecker])
                stringChecker++;
            else
                stringChecker = 0;

            if (stringChecker === elementToFind.length)
                return true;

        }

    }

    return false;
}

/////////////////////////////////////
//////// CODE REVIEW ////////////////
/////////////////////////////////////
/*
for (let i = startFrom; i < arrayLength; ++i) {
    if (typeof array[i] !== "string") throw Error("TypeError")

    const currentElement = array[i];


    const isArray = Array.isArray(array)
    const isExactSame = currentElement === elementToFind


    const isNotString = typeof array !== "string"
    const isNotElememtString = typeof elementToFind !== "string"

    if (isNotString || isNotElememtString) {
        return false
    }

    if (currentElement === elementToFind[stringChecker])
        stringChecker++;
    else
        stringChecker = 0;

    if (stringChecker === elementToFind.length)
        return true;

}
*/
////////////////////////////////////////////////


function includes2(array, elementToFind, fromIndex = 0) {

    let startFrom = fromIndex

    if (startFrom < 0)
        startFrom = arrayLength + startFrom;

    for (let i = startFrom; i < arrayLength; i++) {
        if (array[el] === elementToFind) return true
    }
    return false
}

/////////////////////////////////////
//////////// TESTS //////////////////
/////////////////////////////////////

const tab = [1, 2, 3, 'world', 6, NaN, 3];
const sent = 'hello world'
const word = 'world';

console.log(sent.includes(' '));
console.log(includes(sent, ' '));