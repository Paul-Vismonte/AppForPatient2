"use client";

import { Chart, ChartData, ChartOptions, PointStyle } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Box, Typography, Card, CardContent, CardHeader, TextField, Button, InputAdornment, Dialog, DialogContent, IconButton } from '@mui/material';
import { Save, Fullscreen, FullscreenExit } from '@mui/icons-material';
import { useState } from 'react';
import { _measurements } from 'src/_mock/_measurements';
import { CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface MeasurementChartProps {
  title: string;
  measurementType: keyof typeof _measurements;
  unit: string;
  color: string;
  height?: number;
  fullWidth?: boolean;
}

const MeasurementChart = ({ title, measurementType, unit, color, height = 200, fullWidth = false }: MeasurementChartProps) => {
  const [value, setValue] = useState('');
  const [fullScreenOpen, setFullScreenOpen] = useState(false);
  const allMeasurements = _measurements[measurementType];
  const uniqueDates = [...new Set(allMeasurements.map(m => new Date(m.date).toLocaleDateString()))];

  const chartData: ChartData<'line'> = {
    labels: uniqueDates,
    datasets: [
      {
        label: `${title} (${unit})`,
        data: uniqueDates.map(label => {
          const measurement = allMeasurements.find(m => new Date(m.date).toLocaleDateString() === label);
          return measurement ? measurement.value : null;
        }),
        borderColor: color,
        tension: 0.1,
        fill: false,
        pointRadius: 3,
        pointHoverRadius: 5,
        pointStyle: 'circle' as const
      }
    ]
  };

  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          beginAtZero: true
        }
      }
    }
  };

  const saveMeasurement = () => {
    if (value) {
      const date = new Date().toISOString();
      _measurements[measurementType].push({
        date,
        value: parseFloat(value)
      });
      setValue('');
    }
  };

  return (
    <>
      <Card sx={{ height: height }}>
        <CardHeader 
          title={title} 
          action={
            <IconButton 
              onClick={() => setFullScreenOpen(true)}
              color="inherit"
              size="small"
            >
              <Fullscreen />
            </IconButton>
          }
        />
        <CardContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 2 }}>
            <Box sx={{ display: 'flex', gap: 2, mb: 1 }}>
              <TextField
                fullWidth
                label={`Enter ${title.toLowerCase()} (${unit})`}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                InputProps={{
                  endAdornment: <InputAdornment position="end">{unit}</InputAdornment>
                }}
                size="small"
                sx={{ flex: 1 }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={saveMeasurement}
                startIcon={<Save />}
                size="small"
                sx={{ width: 120 }}
              >
                Save
              </Button>
            </Box>
            <Box sx={{ 
              height: '100%', 
              width: '100%',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <Line 
                data={chartData} 
                options={chartOptions}
              />
            </Box>
          </Box>
        </CardContent>
      </Card>

      {fullScreenOpen && (
        <Dialog
          open={fullScreenOpen}
          onClose={() => setFullScreenOpen(false)}
          fullScreen
          PaperProps={{
            sx: {
              width: '100%',
              maxWidth: '1200px',
              mx: 'auto'
            }
          }}
        >
          <DialogContent>
            <Card>
              <CardHeader 
                title={title} 
                action={
                  <IconButton 
                    onClick={() => setFullScreenOpen(false)}
                    color="inherit"
                    size="small"
                  >
                    <FullscreenExit />
                  </IconButton>
                }
              />
              <CardContent>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <TextField
                    fullWidth
                    label={`Enter ${title.toLowerCase()} (${unit})`}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">{unit}</InputAdornment>
                    }}
                  />
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={saveMeasurement}
                      startIcon={<Save />}
                    >
                      Save
                    </Button>
                  </Box>
                  <Box sx={{ 
                    width: '100%', 
                    height: '80vh'
                  }}>
                    <Line data={chartData} options={chartOptions} />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default MeasurementChart;
