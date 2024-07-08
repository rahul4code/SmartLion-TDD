const StringCalculator = require("../src/stringCalculator");

test("returns 0 for an empty string", () => {
  expect(StringCalculator.add("")).toBe(0);
});

test("returns the number when only one number is provided", () => {
  expect(StringCalculator.add("1")).toBe(1);
});

test("returns the sum of two numbers", () => {
  expect(StringCalculator.add("1,2")).toBe(3);
});
