const { calculation } = require("../140");

describe("calculation function:", () => {
  const a = 6;
  const result = -7.3333;

  test("should calculation be defined", () => {
    expect(calculation(a)).not.toBeNull();
    expect(calculation(a)).toBeTruthy();
    expect(calculation(a)).not.toBeFalsy();;
    expect(calculation(a)).not.toBeNull();
    expect(calculation(a)).toBeDefined();
  });

  test("should return result", () => {
    expect(calculation(a)).toBeCloseTo(result);
  });
});
