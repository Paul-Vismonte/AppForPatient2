"use client";

import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

interface HeightChartProps {
  data: Array<{ date: string; value: number }>;
}

const HeightChart: React.FC<HeightChartProps> = ({ data }) => {
  // Ensure data is a valid array
  const validData = Array.isArray(data) ? data : [];

  // Get latest height value
  const latestHeight = validData[0]?.value || 170;
  
  const heightPercentage = ((latestHeight - 100) / 100) * 100;

  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h6" gutterBottom>
        Height Chart
      </Typography>
      <Box sx={{ width: '80%', mb: 2 }}>
        <LinearProgress variant="determinate" value={heightPercentage} />
      </Box>
      <Typography variant="body1">
        Current height: {latestHeight} cm
      </Typography>
    </Box>
  );
};

export default HeightChart;