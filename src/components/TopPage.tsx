import { ArrowUpIcon } from "@chakra-ui/icons";
import { Box,Show } from "@chakra-ui/react";

const TopPage = () => {
  return (
    <Show above="xl">
      <Box
        pos="fixed"
        bottom="50px"
        right="35px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <a href="#home">
          <ArrowUpIcon
            w="55px"
            h="55px"
            borderRadius="50%"
            color="white"
            bg="green"
            _hover={{
              boxShadow: "dark-lg",
              transition: "0.2s",
            }}
          />
        </a>
      </Box>
    </Show>
  );
};

export default TopPage;
