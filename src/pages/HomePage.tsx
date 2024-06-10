import { Box, Center, HStack } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Center>
      <HStack
        backgroundColor="gray"
        w={{
          base: "96%",
          sm: "80%",
        }}
        display={{
          base: "block",
          md: "flex",
        }}
        mt={1}
      >
        <Box w={{ base: "100%", md: "70%" }} backgroundColor="red">
          left-box
        </Box>
        <Box w={{ base: "100%", md: "30%" }} backgroundColor="blue">
          right-box
        </Box>
      </HStack>
    </Center>
  );
};

export default HomePage;
