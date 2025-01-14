import { createBrowserRouter } from "react-router-dom";

import Products from "../pages/Products";
import ProductInfo from "../pages/ProductInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/product",
    element: <ProductInfo />,
  },
]);
export default router;
