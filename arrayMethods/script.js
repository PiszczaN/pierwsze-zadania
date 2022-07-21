const forEachFn = (array, callback) => {

    if (!Array.isArray(array))
        throw Error(`TypeError: ${array}.forEach is not a function`);

    for (const [iterator, value] of array.entries()) {
        callback(value, iterator);
    }

};

const mapFn = (array, callback) => {

    if (!Array.isArray(array))
        throw Error(`TypeError: ${array}.forEach is not a function`);

    const arrayCopy = array.slice(0);
    let resultArray = [];

    for (let index = 0; index < arrayCopy.length; ++index) {
        const element = arrayCopy[index];

        const resultElement = callback(element, index, arrayCopy);

        resultArray.push(resultElement);
    }

    return resultArray;
};

const entriesFn = (array) => {

    if (!Array.isArray(array))
        throw Error(`TypeError: ${array}.forEach is not a function`);

};

const filterFn = (array, callback) => {

    if (!Array.isArray(array))
        throw Error(`TypeError: ${array}.forEach is not a function`);

    const arrayCopy = array.slice(0);
    let resultArray = [];

    for (let index = 0; index < arrayCopy.length; ++index) {
        const element = arrayCopy[index];

        const resultElement = callback(element, index, arrayCopy);

        if (resultElement)
            resultArray.push(element);
    }

    return resultArray;
};

const reduceFn = (array, callback, inital) => {

    if (!Array.isArray(array))
        throw Error(`TypeError: ${array}.forEach is not a function`);

    const arrayCopy = array.slice(0);
};

const everyFn = (array, callback) => {

    if (!Array.isArray(array))
        throw Error(`TypeError: ${array}.forEach is not a function`);
};

const someFn = (array, callback) => {

    if (!Array.isArray(array))
        throw Error(`TypeError: ${array}.forEach is not a function`);
};




/////////////////////////////////////
//////////// TESTS //////////////////
/////////////////////////////////////

const array = [1, 2, 'egse', 4, 5, 6];

// MAP

const testFilterFn = filterFn(array, element => element > 3);
console.log(testFilterFn);

console.log("|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");

const testFilter = array.filter(element => element > 3);
console.log(testFilter);

// MAP
/*
const testMapFn = mapFn(array, element => element = element + 2);
console.log(testMapFn);

console.log("|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");

const testMap = array.map(element => element = element + 2);
console.log(testMap);
*/
// FOREACH
/*
forEachFn(array, (element, index) => {
    element = element + 2;
    console.log(`Testing forEachFn: at index: ${index} there is element: ${element}`);
})

console.log("|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");

array.forEach((element, index) => {
    element = element + 2;
    console.log(`Testing .forEach: at index: ${index} there is element: ${element}`);
})
*/