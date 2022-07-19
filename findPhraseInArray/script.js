const inputData = [10, "sobie", "Śarr rwefd", "śarr rwefd", "wyrazów", "TUTAJ", "losowe", "wyrazy", "dziewczyna", "chłopak", "Jakub", "Julia", "Raciborz", "pies", "kot"];

const findPhraseInArray = (array, phrase) => {

    phraseToFind = phrase.trim().toLowerCase().replaceAll(' ', '');

    let foundPhrases = []

    array.forEach((element, index) => {

        const elementToCheck = element.trim().toLowerCase().replaceAll(' ', '');

        if (elementToCheck.includes(phraseToFind)) {
            foundPhrases.push([index, element]);
        }
    });

    return foundPhrases;
};


/////////////////////////////////////
//////// CODE REVIEW ////////////////
/////////////////////////////////////


// {},[],()=>{}

// 1. typy (array)
// 2. logike (length > 0)
// 3. wymagania biznesowe (max length = 2)

// immutability priciple
const findPhraseInArrayCR = (array, phrase) => {
    // walidacja

    const arrayCopy = array.slice(0)

    const isArray = Array.isArray(arrayCopy);
    const isString = String.isString(phrase);

    if (!isArray || !isString)
        throw Error("TypeError: element should be typeof string");


    const phraseToFind = phrase.trim().toLowerCase().replaceAll(' ', '');
    let foundPhrases = []

    arrayCopy.forEach((element, index) => {
        if (typeof element !== "string") {
            throw new Error("TypeError: element should be typeof string");
            // console.error
            return [];
        }
        const elementToCheck = element.trim().toLowerCase().replaceAll(' ', '');
        if (elementToCheck.includes(phraseToFind)) {
            foundPhrases.push([index, element]);
        }
    });

    return foundPhrases;
};


// przykładowe działanie:
const result = findPhraseInArrayCR(123123, 123512351);
// result === [ [2, 'tutaj'], [5, 'TUTAJ'] ]
console.log(result);