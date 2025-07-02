import DashboardContainer from "../../modules/dashboardContainer/dashboardContainer";
import OverviewCards from "./components/overviewCards";
import SummaryAndToSell from "./components/summaryAndToSell";
import "./styles/style.css";

export default function Home() {
  return (
    <DashboardContainer pageTitle="Ecommerce Dashboard" links={[]}>
      <OverviewCards />
      <SummaryAndToSell />
    </DashboardContainer>
  );
}
