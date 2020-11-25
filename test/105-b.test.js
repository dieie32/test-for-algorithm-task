const { powerCalcB } = require("../105-b");

describe("powerCalcB function:", () => {
  const x = 3;
  const n = 2;
  const result = 729;

  test("should powerCalcB be defined", () => {
    expect(powerCalcB(x, n)).not.toBeNull();
    expect(powerCalcB(x, n)).toBeTruthy();
    expect(powerCalcB(x, n)).not.toBeFalsy();;
    expect(powerCalcB(x, n)).not.toBeNull();
    expect(powerCalcB(x, n)).toBeDefined();
  });

  test("should return result", () => {
    expect(powerCalcB(x, n)).toEqual(result);
  });
});
