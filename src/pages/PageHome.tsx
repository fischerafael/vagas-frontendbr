import { HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Main } from "../components/Main";
import { Sidebar } from "../components/Sidebar";
import { IJobRes } from "../data/interfaces";
import { useJobs } from "../hooks/useJobs";
import { getUniqueJobLabels } from "../utils/getJobLabels";

interface Props {
  jobs: IJobRes[];
}

export const PageHome = ({ jobs }: Props) => {
  // const { setFilteredJobs, filteredJobs } = useJobs();
  // console.log("filtered", filteredJobs);

  const labels = getUniqueJobLabels(jobs);

  console.log("ALL LABELS ", labels);

  return (
    <HStack
      w="full"
      bg="gray.50"
      color="gray.900"
      h="100vh"
      align="flex-start"
      fontFamily="sans-serif"
    >
      <Sidebar />
      <Main jobs={jobs} />
    </HStack>
  );
};
