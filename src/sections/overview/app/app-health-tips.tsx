'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import { Iconify } from 'src/components/iconify';

export function AppHealthTips() {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Iconify icon="solar:lightbulb-bold" sx={{ width: 24, height: 24, mr: 1 }} />
          <Typography variant="h6">Health Tips</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Daily health tips and wellness advice
        </Typography>
      </CardContent>
    </Card>
  );
}
