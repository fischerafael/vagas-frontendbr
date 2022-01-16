import { IJobRes } from "../../data/interfaces";
import { flattenArrayOfArrayOfStrings } from "../flattenArrayOfString";
import { removeDuplicates } from "../removeDuplicates";

export const getUniqueJobLabels = (
  jobsArray: IJobRes[],
  flatten: (
    arrayOfArrayOfStrings: string[][]
  ) => string[] = flattenArrayOfArrayOfStrings
) => {
  if (!jobsArray) return [];

  const labelsPerJobArray = jobsArray.map((job) => {
    const stringArr = job.labels?.map((label) => label.name);
    return stringArr;
  });

  const allLabels = flatten(labelsPerJobArray as string[][]);

  const labelWithouDuplicates = removeDuplicates(allLabels);

  return labelWithouDuplicates;
};
