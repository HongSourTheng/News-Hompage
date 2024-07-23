import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import Error from "./components/Error";
import { Heading } from "@chakra-ui/react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "new",
        element: <Heading>New Page </Heading>,
      },
      {
        path: "popular",
        element: <Heading>Popular Page</Heading>,
      },
      {
        path: "trending",
        element: <Heading>Trending Page</Heading>,
      },
      {
        path: "Categories",
        element: <Heading>Categories Page</Heading>,
      },
    ],
  },
]);
export default router;
