function capitalize(string) {
    var firstLetter = string[0].toUpperCase();
    var rest = string.slice(1);
    var final = firstLetter + rest;
    return final;
}
function allCaps(string) {
    var final = string.toUpperCase();
    return final;
}
function capitalizeWords(string) {
    var sentence = string.split(' ');
    var finalSentence = [];
    for (var i = 0; i < sentence.length; i++) {
        finalSentence.push(capitalize(sentence[i]));
    }
    var finalResult = finalSentence.join(' ');
    return finalResult;
}
function removeWhitespace(string) {
    var trim = string.trim();
    var inBetween = trim.split(' ');
    for (var index = 0; index < inBetween.length; index++) {
        if (inBetween[index] === ' ' || inBetween[index] === '') {
            inBetween.splice(index, 1);
            index--;
        }
    }
    var final = inBetween.join(' ');
    return final;
}
function kebabCase(string) {
    var lowercaseString = string.toLowerCase();
    var kebabCaseNoWhitespace = removeWhitespace(lowercaseString);
    var kebabCaseArray = kebabCaseNoWhitespace.split(' ');
    var kebabCaseFinal = kebabCaseArray.join('-');
    return kebabCaseFinal;
}
function snakeCase(string) {
    var lowercaseString = string.toLowerCase();
    var snakeCaseNoWhitespace = removeWhitespace(lowercaseString);
    var snakeCaseArray = snakeCaseNoWhitespace.split(' ');
    var snakeCaseFinal = snakeCaseArray.join('_');
    return snakeCaseFinal;
}
function camelCase(string) {
    var wordList = string.split(' ');
    var camelCaseArray = [];
    camelCaseArray.push(wordList[0].toLowerCase());
    for (var i = 1; i < wordList.length; i++) {
        camelCaseArray.push(capitalize(wordList[i]));
    }
    var camelCaseFinal = camelCaseArray.join('');
    return camelCaseFinal;
}
function shift(string) {
    var stringArray = string.split('');
    var firstLetter = stringArray.splice(0, 1);
    stringArray.push(firstLetter[0]);
    var final = stringArray.join('');
    return final;
}
function makeHashTag(string) {
    var stringArray = string.split(' ');
    var lengthSorted = [];
    for (var i = 0; i < stringArray.length; i++) {
        if (stringArray[i].length > stringArray[0].length) {
            lengthSorted.splice(0, 0, stringArray[i]);
        }
        else {
            lengthSorted.push(stringArray[i]);
        }
    }
    var final = [];
    for (var i = 0; i < 3; i++) {
        var word = lengthSorted[i].toLowerCase();
        var wordArray = word.split('');
        wordArray.splice(0, 0, "#");
        var hashtag = wordArray.join('');
        final.push(hashtag);
    }
    return final;
}
function isEmpty(string) {
    var trimmed = string.trim();
    var stringArray = trimmed.split('');
    return stringArray.length === 0;
}

export { allCaps, camelCase, capitalize, capitalizeWords, isEmpty, kebabCase, makeHashTag, removeWhitespace, shift, snakeCase };
//# sourceMappingURL=bundle.esm.js.map
