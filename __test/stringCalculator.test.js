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

test("returns the sum of multiple numbers", () => {
  expect(StringCalculator.add("1,2,3,4")).toBe(10);
});

test("handles new lines between numbers", () => {
  expect(StringCalculator.add("1\n2,3")).toBe(6);
});

test("supports different delimiters", () => {
  expect(StringCalculator.add("//;\n1;2")).toBe(3);
});
