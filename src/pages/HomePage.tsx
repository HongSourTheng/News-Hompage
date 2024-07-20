import "swiper/css";
import "swiper/css/navigation";
import AdsPage from "../components/AdsPage";
import News from "../components/News";
import Products from "../components/Products";
import Responsive from "../components/Responsive";
import newsItem from "../data/news";
import productsItem from "../data/products";
import imgPages from "../data/img-pages";

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
      >
        <AdsPage img={imgPages} />
        <News news={newsItem} />
        <Products product={productsItem} />
      </Responsive>
    </>
  );
};

export default HomePage;
