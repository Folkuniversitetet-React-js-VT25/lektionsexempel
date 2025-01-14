import { createBrowserRouter } from "react-router-dom";

import Products from "../pages/Products";
import ProductInfo from "../pages/ProductInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/product/:name", // :name blir som en placeholder som ersätts av ett produktnamn senare
    element: <ProductInfo />,
  },
]);
export default router;
