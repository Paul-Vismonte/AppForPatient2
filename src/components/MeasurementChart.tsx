"use client";

import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface MeasurementChartProps {
  title: string;
  measurementType: string;
  unit: string;
  color: string;
  maxValue?: number;
  data: Array<{ date: string; value: number }>;
}

const MeasurementChart: React.FC<MeasurementChartProps> = ({
  title,
  measurementType,
  unit,
  color,
  maxValue = 100,
  data
}) => {
  // Generate sample data if none provided
  if (data.length === 0) {
    const now = new Date();
    const baseValue = value;
    
    // Generate 7 days of data with some variation
    data = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(now);
      date.setDate(now.getDate() - i);
      const variation = Math.random() * 10 - 5; // Random variation between -5 and +5
      return {
        date: date.toLocaleDateString(),
        value: Math.max(0, Math.min(maxValue, baseValue + variation))
      };
    });
  }

  // Ensure value is a valid number
  const validValue = typeof value === 'number' ? value : 0;
  
  // Ensure maxValue is a valid number and greater than 0
  const validMaxValue = typeof maxValue === 'number' && maxValue > 0 ? maxValue : 100;

  return (
    <Card sx={{ 
      backgroundColor: 'transparent',
      boxShadow: 0,
    }}>
      <CardContent sx={{ 
        backgroundColor: 'transparent'
      }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mb: 2,
          p: 1
        }}>
          <Typography variant="subtitle1" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: color }}>
            {validValue} {unit}
          </Typography>
        </Box>
        <Box sx={{ 
          height: 300, 
          width: '100%',
          p: 1
        }}>
          <ResponsiveContainer width={600} height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[0, validMaxValue]} />
              <Tooltip
                formatter={(value: number) => {
                  // Format the number to 1 decimal place
                  return [value.toFixed(1), unit];
                }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke={color} 
                strokeWidth={2}
                dot={{ fill: color }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MeasurementChart;