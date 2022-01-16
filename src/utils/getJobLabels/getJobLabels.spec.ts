import { getUniqueJobLabels } from ".";
import { IJobRes } from "../../data/interfaces";

const jobsArr = [
  { labels: [{ name: "frontend" }, { name: "backend" }] },
  { labels: [{ name: "pleno" }, { name: "backend" }] },
];

describe("getUniqueJobLabels", () => {
  it("must return an array of strings", () => {
    const result = getUniqueJobLabels(jobsArr as IJobRes[]);
    expect(result).toEqual(["frontend", "backend", "pleno"]);
  });
});
