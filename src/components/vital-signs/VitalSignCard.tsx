'use client';

import { useState } from 'react';
import { Box, Card, Typography, TextField, Button, FormControl, FormControlLabel, Switch } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';

interface VitalSignCardProps {
  title: string;
  value: string;
  onChange: (value: string) => void;
  measurements: any[];
  unit?: string;
  color?: string;
}

export default function VitalSignCard({ title, value, onChange, measurements, unit = '', color = '#1976D2' }: VitalSignCardProps) {
  const [showGraph, setShowGraph] = useState(false);
  const [fullScreenOpen, setFullScreenOpen] = useState(false);

  const chartData: ChartData<'line'> = {
    labels: measurements.map(m => new Date(m.date).toLocaleDateString()),
    datasets: [{
      label: title,
      data: measurements.map(m => m.value),
      borderColor: color,
      tension: 0.1,
      fill: false,
      pointRadius: 3,
      pointHoverRadius: 5
    }]
  };

  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          font: { size: 8 }
        },
        grid: { drawBorder: false }
      },
      x: {
        ticks: {
          font: { size: 8 }
        },
        grid: { drawBorder: false }
      }
    }
  };

  return (
    <Card sx={{ p: 1, height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Typography variant="subtitle2">{title}</Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <FormControlLabel
            control={
              <Switch
                checked={showGraph}
                onChange={() => setShowGraph(!showGraph)}
                color="primary"
                size="small"
              />
            }
            label="Graph"
          />
          <Button
            variant="contained"
            size="small"
            onClick={() => setFullScreenOpen(true)}
            sx={{
              bgcolor: 'primary.main',
              '&:hover': {
                bgcolor: 'primary.dark'
              }
            }}
          >
            Full Screen
          </Button>
        </Box>
      </Box>
      <TextField
        fullWidth
        size="small"
        label={title}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="number"
        InputProps={{
          endAdornment: <Typography sx={{ ml: 1 }} variant="caption">{unit}</Typography>
        }}
        sx={{ mb: 1 }}
      />
      {showGraph && (
        <Box sx={{ height: 150 }}>
          <Line data={chartData} options={chartOptions} />
        </Box>
      )}
    </Card>
  );
}
