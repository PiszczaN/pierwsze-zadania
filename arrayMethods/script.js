const forEachFn = (array, callback) => {

    if (!Array.isArray(array))
        throw Error(`TypeError: ${array}.forEach is not a function`);

    for (const [iterator, value] of array.entries()) {
        callback(value, iterator);
    }

};

const mapFn = (array, callback) => { };

const entriesFn = (array) => { };

const filterFn = (array, callback) => { };

const reduceFn = (array, callback, inital) => { };

const everyFn = (array, callback) => { };

const someFn = (array, callback) => { };




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