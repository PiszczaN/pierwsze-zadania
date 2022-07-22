/////////////////////////////////////
//////////// FOREACH ////////////////
/////////////////////////////////////

const forEachFn = (array, callback) => {

    if (!Array.isArray(array))
        throw Error(`TypeError: ${array}.forEach is not a function`);

    for (const [iterator, value] of array.entries()) {
        callback(value, iterator);
    }

};

/////////////////////////////////////
//////////// MAP ////////////////////
/////////////////////////////////////

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

/////////////////////////////////////
//////////// ENTRIES ////////////////
/////////////////////////////////////

const entriesFn = (array) => {

    if (!Array.isArray(array))
        throw Error(`TypeError: ${array}.forEach is not a function`);

    const arrayCopy = array.slice(0);
    let resultArray = [];

    for (let index = 0; index < arrayCopy.length; ++index) {
        const entry = [index, arrayCopy[index]];
        resultArray.push(entry);
    }

    return resultArray[Symbol.iterator]();

};

/////////////////////////////////////
//////////// FILTER /////////////////
/////////////////////////////////////

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

/////////////////////////////////////
//////////// REDUCE /////////////////
/////////////////////////////////////

const reduceFn = (array, callback, initial = 0) => {

    if (!Array.isArray(array))
        throw Error(`TypeError: ${array}.forEach is not a function`);

    const arrayCopy = array.slice(0);
    let accumulator = initial;

    for (const [index, value] of entriesFn(arrayCopy)) {

        if (value === undefined)
            continue;

        accumulator = callback(accumulator, value, index, arrayCopy);
    }

    return accumulator;
};

/////////////////////////////////////
//////////// EVERY //////////////////
/////////////////////////////////////

const everyFn = (array, callback) => {

    if (!Array.isArray(array))
        throw Error(`TypeError: ${array}.forEach is not a function`);
};

/////////////////////////////////////
//////////// SOME ///////////////////
/////////////////////////////////////

const someFn = (array, callback) => {

    if (!Array.isArray(array))
        throw Error(`TypeError: ${array}.forEach is not a function`);
};



/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////


/////////////////////////////////////
//////////// TESTS //////////////////
/////////////////////////////////////

const array = [1, 2, 'egse', , 5, 6, null];

// REDUCE

const reduceFnTest = reduceFn(array, (acc, element, index) => {
    return acc + element;
})
console.log(reduceFnTest);

console.log("|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");

const reduceTest = array.reduce((acc, element, index) => {
    return acc + element;

})
console.log(reduceTest);
// ENTRIES
/*
for (const [iterator, value] of entriesFn(array)) {
    console.log(`entriesFn: iterator: ${iterator} value: ${value}`);
}

console.log("|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");

for (const [iterator, value] of array.entries()) {
    console.log(`.entries(): iterator: ${iterator} value: ${value}`);
}
*/
// MAP
/*
const testFilterFn = filterFn(array, element => element > 3);
console.log(testFilterFn);

console.log("|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");

const testFilter = array.filter(element => element > 3);
console.log(testFilter);
*/
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