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

test('remove whitespace', () => {
    expect(fb.removeWhitespace("          So            much               room       for                       activities")).toBe("So much room for activities")
})

test('kebob case', () => {
    expect(fb.kebabCase("hello     WOrld")).toBe("hello-world")
})

test('snake case', () => {
    expect(fb.snakeCase("hello     WOrld")).toBe("hello_world")
})
