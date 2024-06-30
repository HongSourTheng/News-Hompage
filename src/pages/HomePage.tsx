import { Box } from "@chakra-ui/react";

import "swiper/css";
import "swiper/css/navigation";
import Responsive from "../components/Responsive";
import AdsPage from "../components/AdsPage";
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
          backgroundColor="blue.200"
          mr={2}
          float="left"
        >
          right-box for NewsPage
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
