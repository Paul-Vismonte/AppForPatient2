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

const HeightChart = () => {
  const [height, setHeight] = useState('');
  const [showHeight, setShowHeight] = useState(true);
  const [fullScreenOpen, setFullScreenOpen] = useState(false);
  const allMeasurements = _measurements.height;
  const uniqueDates = [...new Set(allMeasurements.map(m => new Date(m.date).toLocaleDateString()))];

  const heightData: ChartData<'line'> = {
    labels: uniqueDates,
    datasets: [
      {
        label: 'Height (cm)',
        data: uniqueDates.map(label => {
          const measurement = allMeasurements.find(m => new Date(m.date).toLocaleDateString() === label);
          return measurement ? measurement.value : null;
        }),
        borderColor: '#1976d2',
        tension: 0.1,
        fill: false,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointStyle: 'circle' as const,
        hidden: !showHeight
      }
    ]
  };

  const heightOptions: ChartOptions<'line'> = {
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

  const saveHeight = () => {
    if (height) {
      const date = new Date().toISOString();
      _measurements.height.push({
        date,
        value: parseFloat(height)
      });
      setHeight('');
    }
  };

  return (
    <>
      <Card 
        sx={{ 
          width: '100%', 
          maxWidth: '1200px', 
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}
      >
        <CardHeader 
          title="Height Tracker" 
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
          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              fullWidth
              label="Height (cm)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              InputProps={{
                endAdornment: <InputAdornment position="end">cm</InputAdornment>
              }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={saveHeight}
                startIcon={<Save />}
              >
                Save Height
              </Button>
            </Box>
            <Box sx={{ 
              height: fullScreenOpen ? '80vh' : 300,
              width: '100%'
            }}>
              <Line data={heightData} options={heightOptions} />
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
              height: '90vh',
              display: 'flex',
              flexDirection: 'column'
            }
          }}
        >
          <DialogContent>
            <Card>
              <CardHeader 
                title="Height Tracker" 
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
                    label="Height (cm)"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">cm</InputAdornment>
                    }}
                  />
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={saveHeight}
                      startIcon={<Save />}
                    >
                      Save Height
                    </Button>
                  </Box>
                  <Box sx={{ 
                    width: '100%', 
                    height: fullScreenOpen ? '80vh' : '25%'
                  }}>
                    <Line data={heightData} options={heightOptions} />
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

export default HeightChart;
