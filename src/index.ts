function capitalize(string: string): string {
    const firstLetter = string[0].toUpperCase();
    const rest = string.slice(1);
    const final = firstLetter + rest;
    return final;
}

function allCaps(string: string): string {
    const final = string.toUpperCase();
    return final;
}

function capitalizeWords(string: string): string {
    const sentence = string.split(' ');
    const finalSentence: string[] = [];
    for (let i = 0; i < sentence.length; i++) {
        finalSentence.push(capitalize(sentence[i]));
    }
    const finalResult = finalSentence.join(' ');
    return finalResult;
}

function removeWhitespace(string: string): string {
    const trim = string.trim();
    const inBetween = trim.split(' ');
    for (let index = 0; index < inBetween.length; index++) {
        if (inBetween[index] === ' ' || inBetween[index] === '') {
            inBetween.splice(index, 1);
            index--;
        }
    }
    const final = inBetween.join(' ');
    return final;
}

function kebabCase(string: string): string {
    const lowercaseString = string.toLowerCase();
    const kebabCaseNoWhitespace = removeWhitespace(lowercaseString);
    const kebabCaseArray = kebabCaseNoWhitespace.split(' ');
    const kebabCaseFinal = kebabCaseArray.join('-');
    return kebabCaseFinal;
}

function snakeCase(string: string): string {
    const lowercaseString = string.toLowerCase();
    const snakeCaseNoWhitespace = removeWhitespace(lowercaseString);
    const snakeCaseArray = snakeCaseNoWhitespace.split(' ');
    const snakeCaseFinal = snakeCaseArray.join('_');
    return snakeCaseFinal;
}

function camelCase(string: string): string {
    const wordList = string.split(' ');
    const camelCaseArray: string[] = [];
    camelCaseArray.push(wordList[0].toLowerCase());
    for (let i = 1; i < wordList.length; i++) {
        camelCaseArray.push(capitalize(wordList[i]));
    }
    const camelCaseFinal = camelCaseArray.join('');
    return camelCaseFinal;
}

function shift(string: string): string {
    const stringArray = string.split('');
    const firstLetter = stringArray.splice(0, 1);
    stringArray.push(firstLetter[0]);
    const final = stringArray.join('');
    return final;
}

function makeHashTag(string: string): string[] {
    const stringArray = string.split(' ');
    const lengthSorted: string[] = [];
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i].length > stringArray[0].length) {
            lengthSorted.splice(0, 0, stringArray[i]);
        } else {
            lengthSorted.push(stringArray[i]);
        }
    }
    const final: string[] = [];
    for (let i = 0; i < 3; i++) {
        const word = lengthSorted[i].toLowerCase();
        const wordArray = word.split('');
        wordArray.splice(0, 0, "#");
        const hashtag = wordArray.join('');
        final.push(hashtag);
    }
    return final;
}

function isEmpty(string: string): boolean {
    const trimmed = string.trim();
    const stringArray = trimmed.split('');
    return stringArray.length === 0;
}

export {
    capitalize,
    allCaps,
    capitalizeWords,
    removeWhitespace,
    kebabCase,
    snakeCase,
    camelCase,
    shift,
    makeHashTag,
    isEmpty
};
