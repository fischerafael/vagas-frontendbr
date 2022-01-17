import { IJobRes, ILabel } from "../../data/interfaces";

const getLabels = (labels: { name: string }[]) => {
  return labels.map((label) => label.name);
};

const getRawLabels = (jobs: IJobRes[]) => {
  return jobs.map((job) => getLabels(job.labels as ILabel[]));
};

const flatArray = (arrayOfArrays: string[][]) => {
  return arrayOfArrays.reduce((acc, current) => {
    const concatArrays = [...acc, ...current];
    return concatArrays;
  }, []);
};

const getUniqueValues = (arrayOfString: string[]) => {
  return arrayOfString.reduce((arr, current) => {
    if (arr && arr.includes(current)) return [...arr];
    return [...arr, current];
  }, [] as string[]);
};

const formatLabels = (jobs: IJobRes[]) => {
  const rawJobLabels = getRawLabels(jobs);
  const flatLabels = flatArray(rawJobLabels);
  const uniqueLabels = getUniqueValues(flatLabels);
  return uniqueLabels;
};

export { formatLabels };
