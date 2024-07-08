class StringCalculator {
  static add(numbers) {
    if (numbers === "") {
      return 0;
    }
    const numArray = numbers.split(",");
    return numArray.reduce((sum, num) => sum + parseInt(num), 0);
  }
}

module.exports = StringCalculator;
