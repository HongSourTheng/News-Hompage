import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Box pos="fixed" bottom={0} right={0} cursor="pointer">
        <a href="#home">Click</a>
      </Box>
    </>
  );
};

export default Layout;
