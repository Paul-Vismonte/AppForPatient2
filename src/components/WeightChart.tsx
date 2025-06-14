"use client";

import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

interface WeightChartProps {
  data: Array<{ date: string; value: number }>;
}

const WeightChart: React.FC<WeightChartProps> = ({ data }) => {
  // Ensure data is a valid array
  const validData = Array.isArray(data) ? data : [];

  // Get latest weight value
  const latestWeight = validData[0]?.value || 70;

  const weightPercentage = ((latestWeight - 40) / 60) * 100;
  const weightCategory = latestWeight < 40 ? 'Underweight' : latestWeight <= 80 ? 'Normal' : 'Overweight';

  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h6" gutterBottom>
        Weight Chart
      </Typography>
      <Box sx={{ width: '80%', mb: 2 }}>
        <LinearProgress variant="determinate" value={weightPercentage} />
      </Box>
      <Typography variant="body1">
        Current weight: {latestWeight} kg ({weightCategory})
      </Typography>
    </Box>
  );
};

export default WeightChart;