import { SimpleGrid } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IJobRes } from "../../data/interfaces";
import { useJobs } from "../../hooks/useJobs";
import { JobCard } from "../JobCard";

export const Main = ({ jobs }: { jobs: IJobRes[] }) => {
  const { push } = useRouter();

  const onCardClick = (job: IJobRes) => {
    const { html_url } = job;
    if (html_url) return;
    push(html_url as string);
  };

  const { setFilteredJobs, filteredJobs } = useJobs();

  useEffect(() => {
    setFilteredJobs(jobs);
  }, [jobs]);

  return (
    <SimpleGrid
      columns={[1, 1, 1, 2, 2, 3]}
      gap="4"
      p="4"
      w="full"
      h="full"
      overflowY="scroll"
    >
      {jobs?.map((job) => (
        <JobCard onClick={() => onCardClick(job)} key={job.id} job={job} />
      ))}
    </SimpleGrid>
  );
};
