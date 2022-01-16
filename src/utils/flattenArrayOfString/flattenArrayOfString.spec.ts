import { flattenArrayOfArrayOfStrings } from ".";

const arrayOfArrayOfString = [
  ["frontend", "backend"],
  ["pleno", "backend"],
];

const expected = ["frontend", "backend", "pleno", "backend"];

describe("flattenArrayOfArrayOfStrings", () => {
  it("must flatten an array of strings", () => {
    const result = flattenArrayOfArrayOfStrings(arrayOfArrayOfString);

    expect(result).toEqual(expected);
  });
});
