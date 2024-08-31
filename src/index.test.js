const fb = require("../src/index")

test('capitalize', () => {
    expect(fb.capitalize("hey")).toBe("Hey")
})