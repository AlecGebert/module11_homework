import getSeason from "../getSeasons";

describe("tests for getSeason function", () => {
  it("should correctly write a season", () => {
    expect(getSeason(5)).toBe(`Время года: Весна`);
    expect(getSeason(6)).toBe(`Время года: Лето`);
    expect(getSeason(11)).toBe(`Время года: Осень`);
    expect(getSeason(12)).toBe(`Время года: Зима`);
    expect(getSeason(0)).toBe("Неправильный номер месяца");
    expect(getSeason(15)).toBe("Неправильный номер месяца");
  });
});
