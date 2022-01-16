import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { IJobRes } from "../data/interfaces";

interface Props {
  filteredJobs: IJobRes[];
  setFilteredJobs: (job: any) => void;
}

const JobsContext = createContext({} as Props);

const JobsProvider = ({ children }: { children: ReactNode }) => {
  const [filteredJobs, setFilteredJobs] = useState([] as IJobRes[]);

  useEffect(() => {
    setFilteredJobs(filteredJobs);
  }, [filteredJobs]);

  return (
    <JobsContext.Provider value={{ filteredJobs, setFilteredJobs }}>
      {children}
    </JobsContext.Provider>
  );
};

const useJobs = () => {
  return useContext(JobsContext);
};

export { JobsProvider, useJobs };
