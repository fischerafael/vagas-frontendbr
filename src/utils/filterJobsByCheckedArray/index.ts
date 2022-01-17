import { IJobRes } from "../../data/interfaces";

const filterJobs = (jobs: IJobRes[], searchArray: string[]) => {
  const formatedArray = getRawLabels(jobs);
  const filtered = filterJobPerWordArray(formatedArray, searchArray);
  return filtered;
};

export { filterJobs };

const getRawLabels = (jobs: IJobRes[]) => {
  const labels = jobs.map((job) => {
    return { labels: job.labels.map((label) => label.name) };
  });
  return labels;
};

export interface IJob {
  labels: string[];
}

const filterJobPerWordArray = (jobs: IJob[], wordArray: string[]) => {
  const filtered = wordArray.reduce((array, current) => {
    const filtered = filterJobPerWord(jobs, current);
    if (
      !filtered ||
      array.some((job) => job.labels.some((label) => label === current))
    )
      return [...array];
    return [...array, ...filtered];
  }, [] as IJob[]);

  return filtered;
};

const filterJobPerWord = (jobs: IJob[], word: string) => {
  const filteredJobs = jobs.filter((job) => job.labels.includes(word));
  return filteredJobs;
};
