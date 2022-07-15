'use strict';

function includes(array, elementToFind, fromIndex = 0) {
    const arrayLength = array.length;
    let startFrom = Math.floor(fromIndex);
    let j = 0;

    if (arrayLength === 0)
        return false;

    for (let i = startFrom; i < arrayLength; ++i) {

        const currentElement = array[i];

        if (i < 0)
            i = arrayLength + i;

        if (typeof (array) === typeof (['array']) && (currentElement === elementToFind || (currentElement !== currentElement && elementToFind !== elementToFind)))
            return true;

        if (typeof (array) === typeof ('string') && typeof (elementToFind) === typeof ('string')) {

            if (currentElement === elementToFind[j] && j + 1 <= elementToFind.length)
                j++;
            else
                j = 0;

            if (j === elementToFind.length)
                return true;

        }

    }

    return false;
}

const tab = [1, 2, 3, 'world', 6, NaN, 3];
const sent = 'hello world'
const word = 'world';

console.log(sent.includes('hello world'));
console.log(includes(sent, word));