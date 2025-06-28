import DashboardContainer from "../../modules/dashboardContainer/dashboardContainer";

export default function Transactions() {
  return (
    <DashboardContainer
      pageTitle="Transactions"
      links={[{ title: "transactions" }]}
    >
      <div>transactions</div>
    </DashboardContainer>
  );
}
