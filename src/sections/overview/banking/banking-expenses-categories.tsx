import type { CardProps } from '@mui/material/Card';
import { Chart, ChartData } from 'chart.js/auto';
import { ChartOptions } from 'chart.js/auto';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import { useState, useCallback, useEffect, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';

import { fCurrency } from 'src/utils/format-number';
import { useChart, ChartLegends } from 'src/components/chart';
import ChartJS from 'chart.js/auto';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title?: string;
  subheader?: string;
  chart: {
    colors?: string[];
    icons?: React.ReactNode[];
    series: {
      label: string;
      value: number;
    }[];
    options?: ChartOptions;
  };
};

export function BankingExpensesCategories({ title, subheader, chart, sx, ...other }: Props) {
  const theme = useTheme();

  const chartColors: string[] = chart.colors ?? [
    theme.palette.secondary.dark,
    theme.palette.error.main,
    theme.palette.primary.main,
    theme.palette.warning.main,
    theme.palette.info.dark,
    theme.palette.info.main,
    theme.palette.success.main,
    theme.palette.warning.dark,
  ];

  const chartSeries = chart.series.map((item) => item.value);

  const chartOptions = useChart({
    chart: { offsetY: 12 },
    colors: chartColors,
    labels: chart.series.map((item) => item.label),
    stroke: { width: 1, colors: [theme.palette.background.paper] },
    fill: { opacity: 0.88 },
    tooltip: { y: { formatter: (value: number) => fCurrency(value) } },
    plotOptions: { pie: { donut: { labels: { show: false } } } },
    ...chart.options,
  });

  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart<'polarArea', number[], string>>(null);

  useEffect(() => {
    // Clean up previous chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Exit early if we don't have a canvas element
    if (!chartRef.current) {
      return;
    }

    // Create new chart instance
    const chartInstance = new ChartJS(chartRef.current, {
      type: 'polarArea',
      data: {
        labels: chart.series.map((item) => item.label),
        datasets: [
          {
            label: 'Expenses',
            data: chartSeries,
            backgroundColor: chartColors,
          },
        ],
      },
      options: chartOptions,
    });

    // Store the chart instance
    chartInstanceRef.current = chartInstance;

    // Cleanup function
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [chartSeries, chartOptions, chartColors]);

  return (
    <Card sx={sx} {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box
        sx={{
          pt: 4,
          pb: 3,
          rowGap: 3,
          columnGap: 5,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <canvas ref={chartRef} sx={{ width: { xs: 240, md: 280 }, height: { xs: 240, md: 280 } }} />

        <ChartLegends
          colors={chartOptions?.colors}
          labels={chartOptions?.labels}
          icons={chart.icons}
          sublabels={chart.series.map((item) => fCurrency(item.value))}
          sx={{ gap: 2.5, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}
        />
      </Box>

      <Divider sx={{ borderStyle: 'dashed' }} />
      <Box
        sx={{
          display: 'grid',
          typography: 'h4',
          textAlign: 'center',
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
      >
        <Box sx={{ py: 2, borderRight: `dashed 1px ${theme.vars.palette.divider}` }}>
          <Box sx={{ mb: 1, typography: 'body2', color: 'text.secondary' }}>Categories</Box>9
        </Box>

        <Box sx={{ py: 2 }}>
          <Box sx={{ mb: 1, typography: 'body2', color: 'text.secondary' }}>Categories</Box>
          $18,765
        </Box>
      </Box>
    </Card>
  );
}
