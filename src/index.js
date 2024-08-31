
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
        console.log(sentence)
        finalSentence = []
        for (let i = 0; i < sentence.length; i++){
            console.log(i)
            finalSentence.push(capitalize(sentence[i]))
        }
        console.log(finalSentence)
        finalResult = finalSentence.join(' ')
        return finalResult
}

// test = capitalize("hey")
// console.log(test)
// test = capitalizeWords('hi i am paul')
// console.log(test)
module.exports.capitalize = capitalize
module.exports.allCaps = allCaps
module.exports.capitalizeWords = capitalizeWords