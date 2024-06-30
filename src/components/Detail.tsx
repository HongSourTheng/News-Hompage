import { Heading, Button, Box, Text } from "@chakra-ui/react";

const Detail = () => {
  return (
    <Box mt={3} p="10px 0">
      <Box
        w={{
          base: "100%",
          md: "50%",
        }}
        float={{
          base: "none",
          md: "left",
        }}
      >
        <Heading
          size={{
            base: "lg",
            md: "xl",
            lg: "2xl",
            xl: "3xl",
          }}
        >
          The Bright Future of Web 3.0?
        </Heading>
      </Box>
      <Box
        w={{
          base: "100%",
          md: "50%",
        }}
        h="100%"
        float={{
          base: "none",
          md: "left",
        }}
        mt={{
          base: "10px",
          md: "0px",
        }}
      >
        <Text color="hsl(236, 13%, 42%)">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </Text>
        <Button
          bg="hsl(5, 85%, 63%)"
          color="white"
          p="10px 38px"
          fontSize={{
            base: "xs",
            md: "sm",
          }}
          borderRadius="0"
          _hover={{
            transition: " 0.3s ease",
            bg: "hsl(240, 100%, 5%)",
          }}
          letterSpacing={2}
          mt={{
            base: "10px",
            lg: "12px",
            xl: "44px",
          }}
        >
          READ MORE
        </Button>
      </Box>
    </Box>
  );
};

export default Detail;
