'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Iconify } from 'src/components/iconify';

export function AppMedicines() {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Iconify icon="ic:round-medication" sx={{ width: 24, height: 24, mr: 1 }} />
          <Typography variant="h6">Medicines</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Your current and past medications
        </Typography>
      </CardContent>
    </Card>
  );
}
