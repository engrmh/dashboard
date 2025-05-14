import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import BarChartIcon from "@mui/icons-material/BarChart";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import CategoryIcon from "@mui/icons-material/Category";

export const SideBarMenuData = [
  {
    title: "Home",
    path: "/",
    icon: <HomeFilledIcon />,
  },
  {
    title: "Transaction",
    path: "/transactions",
    icon: <BarChartIcon />,
  },
  {
    title: "Sales",
    path: "/sales",
    icon: <PointOfSaleIcon />,
  },
  {
    title: "Products",
    path: "/products",
    icon: <CategoryIcon />,
  },
];
