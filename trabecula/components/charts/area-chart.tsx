import { LineChart } from "@mui/x-charts/LineChart";
import { Comp, View } from "trabecula/components";
import { CssColor, makeClasses } from "trabecula/utils/client";

export interface AreaChartSeries {
  color: CssColor;
  label: string;
  values: number[];
}

export interface AreaChartProps {
  height?: number;
  /** Drawn in order, so later series overlap earlier ones. */
  series: AreaChartSeries[];
  valueFormatter?: (value: number) => string;
  xValueFormatter?: (value: Date) => string;
  xValues: Date[];
}

/** Overlapping filled lines over a time axis, with a legend and an axis tooltip. */
export const AreaChart = Comp(
  ({ height = 250, series, valueFormatter, xValueFormatter, xValues }: AreaChartProps) => {
    const { css } = useClasses(null);

    const formatValue = (value: number | null) =>
      value === null ? "--" : (valueFormatter?.(value) ?? String(value));

    // The chart fills this view, so the legend above it stays within the height.
    return (
      <View width="100%" height={height} className={css.chart}>
        <LineChart
          axisHighlight={{ x: "line" }}
          // The plot sits 70 px from the left (20 px default margin and 50 px y-axis) and 30 px
          // from the bottom (5 px margin and 25 px x-axis).
          margin={{ bottom: 5 }}
          series={series.map(({ color, label, values }) => ({
            area: true,
            color,
            data: values,
            label,
            showMark: false,
            valueFormatter: formatValue,
          }))}
          skipAnimation
          slotProps={{ tooltip: { trigger: "axis" } }}
          // Line charts default to ending the x-axis at the data; nice limits round it to ticks.
          xAxis={[
            {
              data: xValues,
              domainLimit: "nice",
              height: 25,
              scaleType: "time",
              valueFormatter: xValueFormatter,
            },
          ]}
          yAxis={[{ valueFormatter: formatValue, width: 50 }]}
        />
      </View>
    );
  },
);

const useClasses = makeClasses({
  chart: {
    "& .MuiLineChart-area": {
      fillOpacity: 0.35,
    },
    "& .MuiLineChart-line": {
      strokeWidth: 2,
    },
  },
});
