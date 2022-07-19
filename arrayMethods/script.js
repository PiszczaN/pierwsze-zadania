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

forEachFn(array, (element, index) => {
    element = element + 2;
    console.log(`Testing forEachFn: at index: ${index} there is element: ${element}`);
})

console.log("|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||");

array.forEach((element, index) => {
    element = element + 2;
    console.log(`Testing .forEach: at index: ${index} there is element: ${element}`);
})