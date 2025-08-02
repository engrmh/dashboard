import HomePage from "../pages/home/home";
import NotFound from "../pages/notFound";
import CurrentProductPage from "../pages/products/currentProduct";
import ProductsPage from "../pages/products/products";
import TransactionsPage from "../pages/transactions/transactions";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/transactions",
    element: <TransactionsPage />,
  },
  {
    path: "/sales",
    element: <></>,
  },
  {
    path: "/products",
    element: <ProductsPage />,
    children: [
      {
        path: "/products/:id",
        element: <CurrentProductPage />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
];
