const StringCalculator = require("../src/stringCalculator");

test("returns 0 for an empty string", () => {
  expect(StringCalculator.add("")).toBe(0);
});

test("returns the number when only one number is provided", () => {
  expect(StringCalculator.add("1")).toBe(1);
});
