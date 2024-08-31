const fb = require("../src/index")

test('capitalize', () => {
    expect(fb.capitalize("hey")).toBe("Hey")
})

test('all caps', () => {
    expect(fb.allCaps("hey")).toBe("HEY")
})
