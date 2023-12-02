import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Second from "../pages/Second/Second";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/second",
    element: <Second></Second>,
  },
]);

export default router;
