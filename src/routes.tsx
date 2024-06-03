import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Test from "./components/Test";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: "error",
  },
  {
    path: "test",
    element: <Test />,
  },
]);
export default router;
