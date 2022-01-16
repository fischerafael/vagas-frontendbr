import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { IJobRes } from "../data/interfaces";
import { getUniqueJobLabels } from "../utils/getJobLabels";

interface Props {
  jobs: IJobRes[];
  setJobs: (job: any) => void;
  labels: string[];
  setLabels: (e: any) => void;
  checked: string[];
  setChecked: (e: any) => void;
  filteredJobs: IJobRes[];
  setFilteredJobs: (job: any) => void;
}

const JobsContext = createContext({} as Props);

const JobsProvider = ({ children }: { children: ReactNode }) => {
  const [jobs, setJobs] = useState([] as IJobRes[]);
  const [labels, setLabels] = useState([] as string[]);
  const [checked, setChecked] = useState([] as string[]);

  useEffect(() => {
    if (!jobs) return;
    const labels = getUniqueJobLabels(jobs);
    setLabels(labels);
  }, [jobs]);

  const [filteredJobs, setFilteredJobs] = useState([] as IJobRes[]);

  useEffect(() => {
    const filterResults = (labels: string[], jobs: IJobRes[]) => {
      const hasLabels = jobs.filter((job) => {
        const jobLabels = job?.labels?.map((label) => label.name);
      });
      return hasLabels;
    };

    console.log(filterResults(labels, jobs));
    setFilteredJobs(filteredJobs);
  }, [filteredJobs, checked]);

  return (
    <JobsContext.Provider
      value={{
        jobs,
        setJobs,
        labels,
        setLabels,
        checked,
        setChecked,
        filteredJobs,
        setFilteredJobs,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};

const useJobs = () => {
  return useContext(JobsContext);
};

export { JobsProvider, useJobs };
