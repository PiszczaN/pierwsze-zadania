const inputData = ["stwórz", "sobie", "tutaj", "więcej", "wyrazów", "TUTAJ", "losowe", "wyrazy", "dziewczyna", "chłopak", "Jakub", "Julia", "Raciborz", "pies", "kot"];

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


// przykładowe działanie:
const result = findPhraseInArray(inputData, "tut");
// result === [ [2, 'tutaj'], [5, 'TUTAJ'] ]
console.log(result);