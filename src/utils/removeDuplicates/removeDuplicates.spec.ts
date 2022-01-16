import { removeDuplicates } from ".";

const arrayWithDups = ["hi", "hi", "bye"];
const arrayWithoutDups = ["hi", "bye"];

describe("removeDuplicates", () => {
  it("must return an array of unique strings", () => {
    const result = removeDuplicates(arrayWithDups);
    expect(result).toEqual(arrayWithoutDups);
  });
});
