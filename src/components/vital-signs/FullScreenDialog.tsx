'use client';

import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';

interface FullScreenDialogProps {
  title: string;
  open: boolean;
  onClose: () => void;
  measurements: any[];
  color: string;
}

export default function FullScreenDialog({ title, open, onClose, measurements, color }: FullScreenDialogProps) {
  const chartData: ChartData<'line'> = {
    labels: measurements.map(m => new Date(m.date).toLocaleDateString()),
    datasets: [{
      label: title,
      data: measurements.map(m => m.value),
      borderColor: color,
      tension: 0.1,
      fill: false,
      pointRadius: 4,
      pointHoverRadius: 6
    }]
  };

  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: `${title} Measurements`
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1
        }
      }
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xl"
      fullWidth
      PaperProps={{
        sx: {
          height: '90vh',
          display: 'flex',
          flexDirection: 'column'
        }
      }}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="subtitle1">{title} Tracker</Typography>
        </Box>
        <Button onClick={onClose}>Close</Button>
      </DialogTitle>

      <DialogContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ height: '100%' }}>
          <Line data={chartData} options={chartOptions} />
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
