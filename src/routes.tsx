import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: "error",
    children: [
      {
        index:true,
        element: <HomePage />,
      },
    ],
  },
]);
export default router;
