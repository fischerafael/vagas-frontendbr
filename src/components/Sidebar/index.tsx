import { Text, VStack } from "@chakra-ui/react";

export const Sidebar = () => {
  return (
    <VStack w="full" maxW="300px" bg="white" h="full" shadow="sm" px="4">
      <VStack w="full" h="10vh" justify="center" align="flex-start">
        <Text fontWeight="bold">Vagas Frontend</Text>
      </VStack>
    </VStack>
  );
};
