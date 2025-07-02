import { Breadcrumbs, Grid, Rating, Stack, Typography } from "@mui/material";
import BaseContainer from "./modules/baseContainer";
import Chart from "../../../modules/charts/charts";
import { summaryData, topSell } from "../data/data";

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
      <BaseContainer title="Top Selling Products" size={{ xs: 12, md: 6 }}>
        {topSell.map((p, i) => (
          <Stack
            key={i}
            bgcolor={i % 2 != 0 ? "#ccc4" : ""}
            padding={1}
            marginBottom="1rem"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Stack flexDirection="row" gap={2}>
              <Stack>
                <img src={p.image} width={70} height={70} />
              </Stack>
              <Stack>
                <Stack flexDirection="row" gap={1}>
                  <Typography variant="p">{p.title}</Typography>
                  <Rating value={p.star} readOnly size="small" />
                </Stack>
                <Breadcrumbs separator=",">
                  {p.type.map((t, i) => (
                    <Typography variant="p" key={i}>
                      {t}
                    </Typography>
                  ))}
                </Breadcrumbs>
                <Breadcrumbs
                  separator="."
                  classes={{ separator: "categorySeperator" }}
                >
                  {p.category.map((c, i) => (
                    <Typography variant="p" fontSize=".8rem" key={i}>
                      {c}
                    </Typography>
                  ))}
                </Breadcrumbs>
              </Stack>
            </Stack>
            <Stack>
              <Typography variant="p" fontWeight="bold">
                $ {p.price}
              </Typography>
              <Typography variant="p" color="#aaa" fontSize=".8rem">
                Sales
              </Typography>
            </Stack>
          </Stack>
        ))}
      </BaseContainer>
    </Grid>
  );
}
