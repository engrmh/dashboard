import HomePage from "../pages/home/home";
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
  },
];
