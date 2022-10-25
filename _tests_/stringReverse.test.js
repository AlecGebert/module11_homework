import stringReverse from "../stringReverse";

describe("tests for stringReverse function", () => {
  it("should correctly write a stringReverse", () => {
    expect(stringReverse("Hello")).toBe("olleH");
    expect(stringReverse("Testing")).toBe("gnitseT");
    expect(stringReverse("Calling")).toBe("gnillaC");
    expect(stringReverse("Coding")).toBe("gnidoC");
  });
});
