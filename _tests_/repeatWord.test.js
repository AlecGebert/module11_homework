import repeatWord from "../repeatWord";

describe("tests for repeatWord function", () => {
  it("should correctly write a repeatWord", () => {
    expect(repeatWord("hello", 3)).toBe("hello1, hello2, hello3, ");
    expect(repeatWord("testing", 2)).toBe("testing1, testing2, ");
    expect(repeatWord("maniac", 4)).toBe(
      "maniac1, maniac2, maniac3, maniac4, "
    );
  });
});
