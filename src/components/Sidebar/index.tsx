import { Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useJobs } from "../../hooks/useJobs";
import { Checkbox } from "./Checkbox";

export const Sidebar = () => {
  const { checked, setChecked } = useJobs();

  const onCheck = (e: any) => {
    if (checked.includes(e.target.value)) {
      const filtered = checked.filter((op) => op !== e.target.value);
      setChecked(filtered);
      return;
    }
    const newArr = [...checked, e.target.value];
    setChecked(newArr);
  };

  return (
    <VStack
      w="full"
      maxW={["100px", "100px", "300px"]}
      bg="white"
      h="full"
      shadow="sm"
      px="4"
    >
      <VStack w="full" h="10vh" justify="center" align="flex-start">
        <Text fontWeight="bold">Vagas Frontend</Text>
      </VStack>

      <VStack w="full">
        <Checkbox checked={checked} onCheck={onCheck} />
      </VStack>
    </VStack>
  );
};
