import {
  Checkbox as ChakraCheck,
  CheckboxProps,
  Stack,
  VStack,
} from "@chakra-ui/react";

import { useJobs } from "../../../hooks/useJobs";

interface Props {
  checked: string[];
  onCheck: (e: any) => void;
}

export const Checkbox = ({ checked, onCheck }: Props) => {
  const { labels } = useJobs();

  return (
    <VStack w="full" align="flex-start">
      {labels?.map((label) => (
        <ChakraCheck key={label} value={label} onChange={(e) => onCheck(e)}>
          {label}
        </ChakraCheck>
      ))}
    </VStack>
  );
};
