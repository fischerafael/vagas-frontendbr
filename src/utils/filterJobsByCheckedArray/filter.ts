export interface IJob {
  labels: string[];
}

const jobs = [
  { labels: ["Senior", "Pleno"] },
  { labels: ["Junior", "Pleno"] },
  { labels: ["Junior", "Senior"] },
  { labels: ["React", "Pleno"] },
];
const search = ["Pleno", "Junior"];

const filterJobPerWord = (jobs: IJob[], word: string) => {
  const filteredJobs = jobs.filter((job) => job.labels.includes(word));
  return filteredJobs;
};

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

const result = filterJobPerWordArray(jobs, search);

console.log(result);

interface IJobRes {
  labels: { name: string }[];
}

const getRawLabels = (jobs: IJobRes[]) => {
  return jobs.map((job) => {
    return { labels: job.labels.map((label) => label.name) };
  });
};

const rawJobs = [
  { labels: [{ name: "Senior" }, { name: "Pleno" }] },
  { labels: [{ name: "Senior" }, { name: "React" }] },
  { labels: [{ name: "Junior" }, { name: "Pleno" }] },
];
const search2 = ["Senior", "Junior"];

const formatJobs = getRawLabels(rawJobs);

console.log(formatJobs);

const result2 = filterJobPerWordArray(formatJobs, search2);

console.log(result2);
