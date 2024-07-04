import { Box, Heading, Divider, Text } from "@chakra-ui/react";
import React from "react";

interface newsItem {
  id: number;
  title: string;
  desc: string;
}

interface Props {
  news: newsItem[];
}

const News = ({ news }: Props) => {
  return (
    <Box
      w={{ base: "100%", md: "30%" }}
      height="auto"
      bg="hsl(240, 100%, 5%)"
      mr={2}
      float="left"
      p={{ base: "10px", xl: "15px" }}
      fontFamily="inter-regular"
    >
      <Heading
        as="h1"
        size={{ base: "lg", lg: "lg", xl: "xl" }}
        color="hsl(35, 77%, 62%)"
      >
        New
      </Heading>
      {news.map((item, i) => {
        return (
          <React.Fragment key={item.id}>
            <Heading
              color="white"
              size={{ base: "sm", xl: "md" }}
              mt={{ base: "13px", md: "12px", xl: 7 }}
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
              fontSize={{ base: "sm", md: "xs", lg: "sm" }}
            >
              {item.desc}
            </Text>
            {i === 2 ? "" : <Divider />}
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default News;
