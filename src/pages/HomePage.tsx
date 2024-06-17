import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import imgPages from "../data/img-pages";
import Responsive from "../components/Responsive";
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
        backGround="gray"
      >
        <Box w={{ base: "100%", md: "67.5%" }} backgroundColor="red.200">
          <Box w="100%">
            <Swiper navigation={true} modules={[Navigation]}>
              {imgPages.map((page, i) => (
                <SwiperSlide key={i}>
                  <Image
                    src={page}
                    alt={page}
                    w="100%"
                    h={{
                      base: "200px",
                      md: "250px",
                      lg: "320px",
                    }}
                    objectFit="cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          <Box mt={1}>Detail info</Box>
        </Box>

        <Box
          w={{ base: "100%", md: "30%" }}
          height="auto"
          backgroundColor="blue.200"
          mr={2}
        >
          right-box for NewsPage
        </Box>
        <Box
          mt={1}
          w={{ base: "100%", md: "100%" }}
          flexShrink={0}
          backgroundColor="blue"
        >
          Products
        </Box>
      </Responsive>
    </>
  );
};

export default HomePage;
