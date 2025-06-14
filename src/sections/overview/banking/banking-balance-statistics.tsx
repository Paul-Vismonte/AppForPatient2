import type { CardProps } from '@mui/material/Card';
import type { ChartOptions } from 'chart.js/auto';

import Card from '@mui/material/Card';
import { useState, useCallback, useEffect, useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';

import { fPercent, fCurrency } from 'src/utils/format-number';
import { useChart, ChartLegends } from 'src/components/chart';
import { Chart, ChartData, ChartOptions } from 'chart.js/auto';
import ChartJS from 'chart.js/auto';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title?: string;
  subheader?: string;
  chart: {
    colors?: string[];
    series: {
      name: string;
      categories: string[];
      data: {
        name: string;
        data: number[];
      }[];
    }[];
    options?: ChartOptions<'bar'>;
  };
};

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Income',
      data: [40000, 37000, 42000, 35000, 45000, 48000],
      backgroundColor: (theme: any) => theme.palette.primary.main,
    },
    {
      label: 'Expenses',
      data: [25000, 28000, 32000, 29000, 35000, 38000],
      backgroundColor: (theme: any) => theme.palette.error.main,
    },
  ],
};

const options: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: (value: number) => fCurrency(Number(value)),
      },
    },
  },
} as const;

export function BankingBalanceStatistics({ title, subheader, chart, sx, ...other }: Props) {
  const theme = useTheme();

  const [selectedSeries, setSelectedSeries] = useState<string>('Yearly');

  const currentSeries = chart.series.find((i) => i.name === selectedSeries);

  const chartInstanceRef = useRef<Chart<'bar', number[], string>>(null);
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Clean up previous chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Exit early if we don't have a canvas element
    if (!chartRef.current) {
      return;
    }

    // Initialize chart data and colors
    const chartColors: string[] = chart.colors ?? [
      theme.palette.primary.dark,
      theme.palette.warning.main,
      theme.palette.info.main,
    ];

    // Add theme type assertion
    const themeColors = theme as any;

    const chartData: ChartData<'bar', number[], string> = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Income',
          data: [40000, 37000, 42000, 35000, 45000, 48000],
          backgroundColor: chartColors[0],
        },
        {
          label: 'Expenses',
          data: [25000, 28000, 32000, 29000, 35000, 38000],
          backgroundColor: chartColors[1],
        },
      ],
    };

    // Create new chart instance
    const chartInstance = new ChartJS(chartRef.current, {
      type: 'bar',
      data: chartData,
      options,
    });

    // Store the chart instance
    chartInstanceRef.current = chartInstance;

    // Cleanup function
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [chart.colors, options]);

  const handleChangeSeries = useCallback((newValue: string) => {
    setSelectedSeries(newValue);
  }, []);

  return (
    <Card sx={sx} {...other}>
      <CardHeader
        title={title}
        subheader={subheader}
        action={
          <Box component="select"
            value={selectedSeries}
            onChange={(e) => handleChangeSeries(e.target.value)}
            sx={{
              pl: 1,
              pr: 2,
              py: 0.5,
              borderRadius: 1,
              border: '1px solid',
              borderColor: 'divider',
              '&:hover': {
                borderColor: 'action.hover',
              },
            }}
          >
            {chart.series.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </Box>
        }
        sx={{ mb: 3 }}
      />

      <ChartLegends legends={['Income', 'Expenses']} />

      <Box
        sx={{
          pl: 1,
          py: 2.5,
          pr: 2.5,
          height: 320,
        }}
      >
        <canvas ref={chartRef} />
      </Box>
    </Card>
  );
}
