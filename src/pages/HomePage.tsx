import { Box, Divider, Heading, Text } from "@chakra-ui/react";

import "swiper/css";
import "swiper/css/navigation";
import Responsive from "../components/Responsive";
import AdsPage from "../components/AdsPage";
import newsItem from "../data/news";
import React from "react";
const HomePage = () => {
  return (
    <>
      <Responsive
        display={{
          base: "block",
          md: "flex",
        }}
        alignItems="flex-start"
        mt={7}
        backGround="red.200"
      >
        <AdsPage />
        <Box
          w={{ base: "100%", md: "30%" }}
          height="auto"
          bg="hsl(240, 100%, 5%)"
          mr={2}
          float="left"
          p="15px"
          fontFamily="inter-regular"
        >
          <Heading
            as="h1"
            size={{ base: "lg", lg: "xl" }}
            color="hsl(35, 77%, 62%)"
          >
            New
          </Heading>
          {newsItem.map((item, i) => {
            return (
              <React.Fragment key={item.id}>
                <Heading
                  color="white"
                  size="md"
                  mt={7}
                  cursor="pointer"
                  _hover={{
                    color: "hsl(35, 77%, 62%)",
                    transition: "0.3s ease",
                  }}
                >
                  {item.title}
                </Heading>
                <Text
                  color="hsl(233, 8%, 79%)"
                  m="8px 0px 30px 0"
                  fontSize="sm"
                >
                  {item.desc}
                </Text>
                {i === 2 ? "" : <Divider />}
              </React.Fragment>
            );
          })}
        </Box>
        <Box
          mt={1}
          w={{ base: "100%", md: "100%" }}
          flexShrink={0}
          backgroundColor="blue"
          float="left"
        >
          Products
        </Box>
      </Responsive>
    </>
  );
};

export default HomePage;
