
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

// test = capitalize("hey")
// console.log(test)
// test = capitalizeWords('hi i am paul')
// console.log(test)
// test = removeWhitespace("          So            much               room       for                       activities")
// console.log(test)
module.exports.capitalize = capitalize
module.exports.allCaps = allCaps
module.exports.capitalizeWords = capitalizeWords
module.exports.removeWhitespace = removeWhitespace