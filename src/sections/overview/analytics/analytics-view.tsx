"use client";

import { Box, Grid, Card, Avatar, Typography, CardHeader, CardContent } from '@mui/material';

import { Iconify } from 'src/components/iconify';

const AnalyticsView = () => (
    <Box>
      <Box sx={{ mb: 5 }}>
        <Typography variant="h4" gutterBottom>
          Doctor Analytics Dashboard
        </Typography>
        <Typography variant="body2">
          Overview of your health data and appointments
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Health Metrics */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Health Metrics" />
            <CardContent>
              <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  <Iconify icon="ic:round-heart" />
                </Avatar>
                <Box>
                  <Typography variant="h6">Blood Pressure</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Last check: 120/80 mmHg
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Avatar sx={{ bgcolor: 'success.main' }}>
                  <Iconify icon="ic:round-weight" />
                </Avatar>
                <Box>
                  <Typography variant="h6">Weight</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Last check: 70 kg
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Appointment History */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Recent Appointments" />
            <CardContent>
              <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <Avatar sx={{ bgcolor: 'info.main' }}>
                  <Iconify icon="ic:round-calendar-today" />
                </Avatar>
                <Box>
                  <Typography variant="h6">Cardiology Checkup</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Date: June 1, 2025
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Avatar sx={{ bgcolor: 'warning.main' }}>
                  <Iconify icon="ic:round-event" />
                </Avatar>
                <Box>
                  <Typography variant="h6">Follow-up Appointment</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Date: June 15, 2025
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

export default AnalyticsView;
