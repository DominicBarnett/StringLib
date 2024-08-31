const fb = require("../src/index")

test('capitalize', () => {
    expect(fb.capitalize("hey")).toBe("Hey")
})

test('all caps', () => {
    expect(fb.allCaps("hey")).toBe("HEY")
})

test('capitalize words', () => {
    expect(fb.capitalizeWords("hi i am paul")).toBe("Hi I Am Paul")
})

