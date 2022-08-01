/////////////////////////////////////
//////////// FOREACH ////////////////
/////////////////////////////////////

const forEachFn = (array, callback) => {

    if (!Array.isArray(array))
        throw Error(`TypeError: ${array}.forEachFn is not a function`);

    const arrayCopy = array;

    for (let index = 0; arrayCopy.length; ++index) {
        const element = arrayCopy[index];

        callback(element, index, arrayCopy);
    }

};

/////////////////////////////////////
//////////// MAP ////////////////////
/////////////////////////////////////

const mapFn = (array, callback) => {

    if (!Array.isArray(array))
        throw Error(`TypeError: ${array}.mapFn is not a function`);

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
        throw Error(`TypeError: ${array}.entriesFn is not a function`);

    const arrayCopy = array.slice(0);
    let resultArray = [];

    for (let index = 0; index < arrayCopy.length; ++index) {
        const element = arrayCopy[index];

        const entry = [index, element];
        resultArray.push(entry);
    }

    return resultArray[Symbol.iterator]();

};

/////////////////////////////////////
//////////// FILTER /////////////////
/////////////////////////////////////

const filterFn = (array, callback) => {

    if (!Array.isArray(array))
        throw Error(`TypeError: ${array}.filterFn is not a function`);

    const arrayCopy = array.slice(0);
    let resultArray = [];

    for (let index = 0; index < arrayCopy.length; ++index) {
        const element = arrayCopy[index];

        if (element === undefined)
            continue;

        const resultElement = callback(element, index, arrayCopy);

        if (resultElement)
            resultArray.push(element);
    }

    return resultArray;
};

/////////////////////////////////////
//////////// REDUCE /////////////////
/////////////////////////////////////

const reduceFn = function (array, callback, initial) {

    if (!Array.isArray(array))
        throw Error(`TypeError: ${array}.reduceFn is not a function`);

    if (array.length === 0 && arguments.length !== 3) {
        throw Error(`Reduce of empty array with no initial value`);
    }

    //  INITIAL is a value to which ACCUMULATOR is initialized the first time the callback is called.
    //  If INITIAL is specified, that also causes CURRENTVALUE to be initialized to the first value in the array.
    //  If INITIAL is not specified, ACCUMULATOR is initialized to the first value in the array,
    //  and CURRENTVALUE is initialized to the second value in the array.

    const arrayCopy = array.slice(0);
    let accumulator = arrayCopy[0];
    let index = 1;

    if (arguments.length === 3) {
        accumulator = initial;
        index = 0;
    }

    for (index; index < arrayCopy.length; ++index) {
        const currentValue = arrayCopy[index];

        if (currentValue === undefined)
            continue;

        accumulator = callback.call(accumulator, accumulator, currentValue, index, arrayCopy);
    }

    return accumulator;
};

/////////////////////////////////////
//////////// EVERY //////////////////
/////////////////////////////////////

const everyFn = (array, callback, thisArg = null) => {

    if (!Array.isArray(array))
        throw Error(`TypeError: ${array}.everyFn is not a function`);

    const arrayCopy = array.slice(0);
    let finalResult = true;

    for (let index = 0; index < arrayCopy.length; ++index) {
        const currentValue = arrayCopy[index];

        if (currentValue === undefined)
            continue;

        let result = callback.call(thisArg, currentValue, index, arrayCopy);

        if (!result) {
            finalResult = false;
            break;
        }

    }

    return finalResult;
};

/////////////////////////////////////
//////////// SOME ///////////////////
/////////////////////////////////////

const someFn = (array, callback, thisArg = null) => {

    if (!Array.isArray(array))
        throw Error(`TypeError: ${array}.someFn is not a function`);

    const arrayCopy = array.slice(0);
    let finalResult = false;

    for (let index = 0; index < arrayCopy.length; ++index) {
        const currentValue = arrayCopy[index];

        if (currentValue === undefined)
            continue;

        let result = callback.call(thisArg, currentValue, index, arrayCopy);

        if (result) {
            finalResult = true;
            break;
        }

    }

    return finalResult;
};



/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////


/////////////////////////////////////
//////////// TESTS //////////////////
/////////////////////////////////////

const array = [1, 2, 'egse', , 5, 6, , null, NaN];
const array1 = [1];
const arrayUn = [undefined]
const array0 = [];
//console.log(`TEST: ${array[3]} ( ${typeof (array[3])} ) vs ${array[4]} ( ${typeof (array[4])} ) is:  ${array[3] === array[4]}`);
//console.log(`INDEX OF UNDEFINED : ${array.indexOf(undefined)}`);

// SOME
/*
const someFnTest = someFn(array, function (currentValue, index) {
    //console.log(this);

    return currentValue < 7;
}, 2)
console.log(someFnTest);

console.log("|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");


const someTest = array.some(function (currentValue, index) {
    //console.log(this);
    return currentValue < 7;
}, 2)
console.log(someTest);
*/
// EVERY
/*
console.log("|||||||||||||||||||||||||||||||SOME||||||||||||||||||||||||||||||||\n|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n|||||||||||||||||||||||||||||||EVERY|||||||||||||||||||||||||||||||");

const everyFnTest = everyFn(array, function (currentValue, index) {
    //console.log(this);

    return currentValue < 7;
}, 2)
console.log(everyFnTest);

console.log("|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");


const everyTest = array.every(function (currentValue, index) {
    //console.log(this);
    return currentValue < 7;
}, 2)
console.log(everyTest);
*/
// REDUCE
/*
const reduceFnTest = reduceFn(array1, (acc, element, index) => {
    //console.log(this);

    return acc + element;
}, 2)

//const reduceFnTest2 = reduceFn(array1, function (acc, element, index) {
//    console.log(this);
//
//   return acc + element;
//}, 2)
console.log(reduceFnTest);

console.log("|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");

const reduceTest = array1.reduce((acc, element, index) => {
    //console.log(this);
    return acc + element;
}, 2)

//const reduceTest2 = array1.reduce(function (acc, element, index) {
//    console.log(this);
//    return acc + element;
//}, 2)
console.log(reduceTest);
*/
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
// FILTER
/*
const testFilterFn = filterFn(array, (element, index) => {
    console.log(`index: ${index}, element: ${element}`);
    return element;
});
console.log(testFilterFn);

console.log("|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");

const testFilter = array.filter((element, index) => {
    console.log(`index: ${index}, element: ${element}`);
    return element;
});
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