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

    return (
      <View width="100%" className={css.chart}>
        <LineChart
          axisHighlight={{ x: "line" }}
          height={height}
          margin={{ bottom: 30, left: 70, right: 20, top: 40 }}
          series={series.map(({ color, label, values }) => ({
            area: true,
            color,
            data: values,
            label,
            showMark: false,
            valueFormatter: formatValue,
          }))}
          tooltip={{ trigger: "axis" }}
          xAxis={[{ data: xValues, scaleType: "time", valueFormatter: xValueFormatter }]}
          yAxis={[{ valueFormatter: formatValue }]}
        />
      </View>
    );
  },
);

const useClasses = makeClasses({
  chart: {
    "& .MuiAreaElement-root": {
      fillOpacity: 0.35,
    },
    "& .MuiLineElement-root": {
      strokeWidth: 2,
    },
  },
});
