'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Iconify } from 'src/components/iconify';

export function AppPrescriptions() {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Iconify icon="ic:round-description" sx={{ width: 24, height: 24, mr: 1 }} />
          <Typography variant="h6">Prescriptions</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Recent and active prescriptions
        </Typography>
      </CardContent>
    </Card>
  );
}
