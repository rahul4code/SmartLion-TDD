const StringCalculator = require("../src/stringCalculator");

test("returns 0 for an empty string", () => {
  expect(StringCalculator.add("")).toBe(0);
});
