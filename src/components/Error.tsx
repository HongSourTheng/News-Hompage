import { Button, Center, Image, VStack } from "@chakra-ui/react";
import error from "../assets/images/error.jpg";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
const Error = () => {
  const navigate = useNavigate();
  return (
    <Center>
      <VStack>
        <Image
          src={error}
          w="855px"
          h="555px"
          objectFit="cover"
          borderRadius={5}
        />
        <Button
          bg="hsl(5, 87%, 57%) "
          color="white"
          _hover={{
            transition: "0.3s ease",
            bg: "crimson",
          }}
          onClick={() => navigate("/")}
        >
          <ArrowBackIcon fontSize="xl" mr={1} /> GO BACK HOME
        </Button>
      </VStack>
    </Center>
  );
};

export default Error;
