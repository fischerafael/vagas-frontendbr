import { useEffect, useState } from "react";
import { IJobRes } from "../data/interfaces";

export const useJobs = (jobs?: IJobRes[]) => {
  const resJobs = jobs;

  console.log("jobs", resJobs);

  return { resJobs };
};
