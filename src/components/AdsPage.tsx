import { Box, Image } from "@chakra-ui/react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Detail from "./Detail";

interface Props {
  img: string[];
}
const AdsPage = ({ img }: Props) => {
  return (
    <Box w={{ base: "100%", md: "67.5%" }}>
      <Box w="100%">
        <Swiper navigation={true} modules={[Navigation]}>
          {img.map((page, i) => (
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
      <Detail />
    </Box>
  );
};

export default AdsPage;
