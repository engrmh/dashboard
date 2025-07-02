import { Grid, Stack, Typography } from "@mui/material";
import BaseContainer from "./modules/baseContainer";
import Chart from "../../../modules/charts/charts";
import { summaryData } from "../data/data";

export default function SummaryAndToSell() {
  const data = [
    {
      title: "Products",
      sell: `$${(12920).toLocaleString()}`,
    },
    {
      title: "Sales",
      sell: "64.54 M",
    },
    {
      title: "Cost",
      sell: "24.38 B",
    },
    {
      title: "Revenue",
      sell: "36.72 M",
    },
  ];
  return (
    <Grid container marginTop={2} spacing={2}>
      <BaseContainer title="Summary" size={{ xs: 12, md: 6 }}>
        <Stack
          paddingY={2}
          paddingX={5}
          marginBottom={2}
          flexDirection={"row"}
          justifyContent="space-between"
          alignItems={"center"}
        >
          {data.map((d, i) => (
            <Stack key={i}>
              <Typography variant="h6" fontSize="1.2rem">
                {d.sell}
              </Typography>
              <Typography variant="p" fontSize=".7rem">
                {d.title}
              </Typography>
            </Stack>
          ))}
        </Stack>
        <Chart
          grid={false}
          area={true}
          chartType="line"
          scaleType="band"
          xData={summaryData.x}
          yData={summaryData.y}
        />
      </BaseContainer>
      <BaseContainer
        title="Top Selling Products"
        size={{ xs: 12, md: 6 }}
      ></BaseContainer>
    </Grid>
  );
}
