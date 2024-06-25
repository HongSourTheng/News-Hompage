import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import imgPages from "../data/img-pages";

const AdsPage = () => {
  return (
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
  );
};

export default AdsPage;
