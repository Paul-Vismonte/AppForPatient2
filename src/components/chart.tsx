"use client";

import { Box, useTheme, Stack, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

// ----------------------------------------------------------------------

export function ChartLegends({ legends = [] }: { legends?: string[] }) {
  const theme = useTheme();

  return (
    <Stack spacing={2} direction="row" flexWrap="wrap">
      {legends.map((legend, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              bgcolor: theme.palette.primary.main,
            }}
          />
          <Typography variant="body2" color="text.secondary">
            {legend}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
}

// ----------------------------------------------------------------------

export function useChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart>(null);

  const theme = useTheme();

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (!ctx) {
        console.error('Could not get canvas context');
        return;
      }

      chartInstanceRef.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: [],
          datasets: []
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            x: {
              grid: {
                display: false
              },
              ticks: {
                color: theme.palette.text.secondary
              }
            },
            y: {
              grid: {
                color: theme.palette.divider
              },
              ticks: {
                color: theme.palette.text.secondary
              }
            }
          }
        }
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return {
    chartRef,
    chartInstanceRef
  };
}

// ----------------------------------------------------------------------

export function ChartComponent({ data, options, sx }: { data: any; options: any; sx?: any }) {
  const { chartRef, chartInstanceRef } = useChart();

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.data = data;
      chartInstanceRef.current.options = options;
      chartInstanceRef.current.update();
    }
  }, [data, options]);

  return (
    <Box sx={sx}>
      <canvas ref={chartRef} />
    </Box>
  );
}