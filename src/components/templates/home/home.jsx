import DashboardContainer from "../../modules/dashboardContainer/dashboardContainer";
import OrderOverviewRows from "./components/orderOverviewRows";
import OverviewCards from "./components/overviewCards";
import SoldProduct from "./components/soldProuduct";
import SummaryAndToSell from "./components/summaryAndToSell";
import ThreeProducts from "./components/threeProducts";
import "./styles/style.css";

export default function Home() {
  return (
    <DashboardContainer pageTitle="Ecommerce Dashboard" links={[]}>
      <OverviewCards />
      <SummaryAndToSell />
      <OrderOverviewRows />
      <ThreeProducts />
      <SoldProduct />
    </DashboardContainer>
  );
}
