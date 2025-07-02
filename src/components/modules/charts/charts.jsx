import { BarChart, LineChart } from "@mui/x-charts";
import PropTypes from "prop-types";

/**
 *
 * @param {Object} props
 * @param {"linear" | "band"} props.scaleType
 * @param {boolean} [props.area=false]
 * @param {Array<number|string>} props.xData
 * @param {Array<number>} props.yData
 * @param {"line" | "bar"} [props.chartType="line"]m
 * @param {boolean} [props.grid=true]
 * @param {number} [props.height=400]
 */

export default function Chart({
  area = false,
  yData,
  xData,
  height = 400,
  scaleType,
  chartType = "line",
  grid = true,
}) {
  const commonAxisConfig = {
    disableAxisLine: !grid,
    disableTicks: !grid,
  };

  const commonChartProps = {
    xAxis: [
      {
        data: xData,
        scaleType: scaleType,
        ...commonAxisConfig,
      },
    ],
    yAxis: [commonAxisConfig],
    series: [
      {
        data: yData,
        area: area,
      },
    ],
    height: height,
    sx: {
      width: "100%",
      ...(!grid && {
        "& .MuiChartsGrid-root": {
          display: "none",
        },
      }),
    },
  };

  return chartType === "line" ? (
    <LineChart {...commonChartProps} />
  ) : (
    <BarChart {...commonChartProps} />
  );
}

Chart.propTypes = {
  scaleType: PropTypes.oneOf(["linear", "band"]).isRequired,
  area: PropTypes.bool,
  yData: PropTypes.arrayOf(PropTypes.number).isRequired,
  xData: PropTypes.array.isRequired,
  height: PropTypes.number,
  chartType: PropTypes.oneOf(["line", "bar"]),
  grid: PropTypes.bool,
};
