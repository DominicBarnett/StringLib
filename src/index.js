
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

// test = capitalize("hey")
// console.log(test)
module.exports.capitalize = capitalize
module.exports.allCaps = allCaps