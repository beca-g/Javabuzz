class Javabuzz {

  _isDivisibleBy(number, divisor) {
    return (number % divisor === 0);
  }

  isDivisibleByThree(number) {
    return this._isDivisibleBy(number, 3);
  }

}
