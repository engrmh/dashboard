import { Grid } from "@mui/material";
import ChartCard from "./modules/chartCard";

export default function OverviewCards() {
  const data = [1, 2, 3, 4];
  return (
    <Grid container spacing={2}>
      {data.map((o, i) => (
        <ChartCard key={i} />
      ))}
    </Grid>
  );
}
