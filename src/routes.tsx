import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: "error",
  },
  
]);
export default router;
