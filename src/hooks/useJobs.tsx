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
    setFilteredJobs(filteredJobs);
  }, [filteredJobs]);

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
