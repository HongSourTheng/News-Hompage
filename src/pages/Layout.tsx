import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import TopPage from "../components/TopPage";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <TopPage />
    </>
  );
};

export default Layout;
