
function capitalize(string) {
    firstLetter = string[0].toUpperCase()
    // console.log(firstLetter)
    rest = string.slice(1)
    // console.log(firstLetter + rest)
    final = firstLetter + rest
    return final
}

function allCaps(string) {
    final = string.toUpperCase()
    return final
}

function capitalizeWords(string) {
        sentence = string.split(' ')
        // console.log(sentence)
        finalSentence = []
        for (let i = 0; i < sentence.length; i++){
            // console.log(i)
            finalSentence.push(capitalize(sentence[i]))
        }
        // console.log(finalSentence)
        finalResult = finalSentence.join(' ')
        return finalResult
}

function removeWhitespace(string) {
    trim = string.trim()
    // console.log(trim)
    inBetween = trim.split(' ')
    for (let index = 0; index < inBetween.length; index++) {
        if (inBetween[index] === ' ' || inBetween[index] === '') {
            inBetween.splice(index, 1);
            index--;
        }
    }
    // console.log(inBetween)
    final = inBetween.join(' ')
    // console.log(final)
    return final
}

function kebabCase(string) {
    lowercaseString = string.toLowerCase()
    kebabCaseNoWhitespace = removeWhitespace(lowercaseString)
    kebabCaseArray = kebabCaseNoWhitespace.split(' ')
    kebabCaseFinal = kebabCaseArray.join('-')
    return kebabCaseFinal
}

function snakeCase(string) {
    lowercaseString = string.toLowerCase()
    snakeCaseNoWhitespace = removeWhitespace(lowercaseString)
    snakeCaseArray = snakeCaseNoWhitespace.split(' ')
    snakeCaseFinal = snakeCaseArray.join('_')
    return snakeCaseFinal
}

function camelCase(string) {
    wordList = string.split(' ')
    // console.log(wordList)
    camelCasearray = []
    camelCasearray.push(wordList[0].toLowerCase())
    // console.log(camelCasearray)
    for (let i = 1; i < wordList.length; i++){
        // console.log(i)
        camelCasearray.push(capitalize(wordList[i]))
    }
    camelCasefinal = camelCasearray.join('')
    // console.log("______________")
    // console.log(camelCasearray)
    // console.log("______________")
    // console.log(camelCasestring)
    return camelCasefinal
}

function shift(string) {
    string = string.split('')
    firstLetter = string.splice(0,1)
    string.push(firstLetter)
    final = string.join('')
    return final
}

function makeHashTag(string) {
    stringArray = string.split(' ')
    lengthSorted = []
    // Check length of each string by calling length on each index then if longer splice to index 0 else push to end
    for (let i = 0; i < stringArray.length; i++){
        // console.log(i)
        if (stringArray[i].length > stringArray[0].length) {
            lengthSorted.splice(0,0, stringArray[i])
        } else {
            lengthSorted.push(stringArray[i])
        }
    }
    final = []
    // get the first 3 longest words add a # at the beginning of the word
    for (let i = 0; i < 3; i++) {
        word = lengthSorted[i].toLowerCase()
        wordArray = word.split('')
        wordArray.splice(0, 0, "#")
        hashtag = wordArray.join('')
        final.push(hashtag)
        wordArray.length = 0
    }
    return final
}
// test = capitalize("hey")
// console.log(test)
// test = capitalizeWords('hi i am paul')
// console.log(test)
// test = removeWhitespace("          So            much               room       for                       activities")
// console.log(test)
// test = camelCase("Camel case")
module.exports.capitalize = capitalize
module.exports.allCaps = allCaps
module.exports.capitalizeWords = capitalizeWords
module.exports.removeWhitespace = removeWhitespace
module.exports.kebabCase = kebabCase
module.exports.snakeCase = snakeCase
module.exports.camelCase = camelCase
module.exports.shift = shift
module.exports.makeHashTag = makeHashTag