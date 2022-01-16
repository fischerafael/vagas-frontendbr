import { Flex, Text, VStack } from "@chakra-ui/react";
import { IJobRes } from "../../data/interfaces";

interface Props {
  job: IJobRes;
  onClick: (e: any) => void;
}

export const JobCard = ({ job, onClick }: Props) => {
  return (
    <VStack
      bg="white"
      shadow="sm"
      w="full"
      h="full"
      p="8"
      align="flex-start"
      spacing="4"
      _hover={{ shadow: "md" }}
      cursor="pointer"
      onClick={onClick}
    >
      <VStack w="full" align="flex-start">
        <Text fontSize="xs">Vaga</Text>
        <Text fontWeight="bold">{job.title}</Text>
      </VStack>

      <Flex w="full" wrap="wrap" gap="2" justify="flex-start">
        {job.labels?.map((label) => (
          <Text
            key={label.id}
            bg="gray.50"
            px="4"
            borderRadius="full"
            fontSize="xs"
          >
            {label.name}
          </Text>
        ))}
      </Flex>
    </VStack>
  );
};
