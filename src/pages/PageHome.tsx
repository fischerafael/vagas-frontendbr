import { HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Main } from "../components/Main";
import { Sidebar } from "../components/Sidebar";
import { IJobRes } from "../data/interfaces";
import { useJobs } from "../hooks/useJobs";

interface Props {
  jobs: IJobRes[];
}

export const PageHome = ({ jobs }: Props) => {
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
