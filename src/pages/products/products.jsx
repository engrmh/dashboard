import { useLocation, Outlet } from "react-router-dom";
import Products from "../../components/templates/products/products";

export default function ProductsPage() {
  const location = useLocation();

  if (location.pathname === "/products") {
    return <Products />;
  } else {
    return <Outlet />;
  }
}
