const { calcFactorialEquation } = require("../235");

describe("calcFactorialEquation function:", () => {
  const m = 3;
  const n = 2;
  const result = 0.066;

  test("should calcFactorialEquation be defined", () => {
    expect(calcFactorialEquation(m, n)).not.toBeNull();
    expect(calcFactorialEquation(m, n)).toBeTruthy();
    expect(calcFactorialEquation(m, n)).not.toBeFalsy();
    expect(calcFactorialEquation(m, n)).not.toBeNull();
    expect(calcFactorialEquation(m, n)).toBeDefined();
  });

  test("should return result", () => {
    expect(calcFactorialEquation(m, n)).toBeCloseTo(result);
  });
});
