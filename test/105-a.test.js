const { powerCalcA } = require("../105-a");

describe("powerCalcA function:", () => {
  const x = 2;
  const n = 2;
  const result = 4;

  test("should powerCalcA be defined", () => {
    expect(powerCalcA(x, n)).not.toBeNull();
    expect(powerCalcA(x, n)).toBeTruthy();
    expect(powerCalcA(x, n)).not.toBeFalsy();
    expect(powerCalcA(x, n)).not.toBeNull();
    expect(powerCalcA(x, n)).toBeDefined();
  });

  test("should return result", () => {
    expect(powerCalcA(x, n)).toEqual(result);
  });
});
