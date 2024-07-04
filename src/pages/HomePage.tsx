import { Box } from "@chakra-ui/react";

import "swiper/css";
import "swiper/css/navigation";
import Responsive from "../components/Responsive";
import AdsPage from "../components/AdsPage";
import newsItem from "../data/news";
import News from "../components/News";
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
        <News news={newsItem} />
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
